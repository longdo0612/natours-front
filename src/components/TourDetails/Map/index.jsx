import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

mapboxgl.accessToken =
  'pk.eyJ1IjoibG9uZzhldmx0biIsImEiOiJjbDZ4MzF3c2owM3o1M2psOWs1aGdobjk2In0.Aeu5jfSj06UUoIsQLsUQOw';

const TourDetailsMap = ({ locations }) => {
  const mapContainer = useRef(null);

  // const map = new mapboxgl.Map({
  //   container: 'map', // container ID
  //   style: 'mapbox://styles/mapbox/streets-v12', // style URL
  //   center: [-74.5, 40], // starting position [lng, lat]
  //   zoom: 9, // starting zoom
  // });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/long8evltn/cl6x69mpz00mr14pdlka2uxxb',
      center: [-70.9, 42.35],
      zoom: 9,
      scrollZoom: false,
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach((location) => {
      const el = document.createElement('div');
      el.className = 'marker';

      // add marker
      new mapboxgl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat(location.coordinates)
        .addTo(map);

      // add popup
      new mapboxgl.Popup({ offset: 30, closeButton: false })
        .setLngLat(location.coordinates)
        .setHTML(`<p>Day ${location.day}: ${location.description}</p>`)
        .addTo(map);

      bounds.extend(location.coordinates);
    });

    map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100,
      },
    });

    // map.addControl(new mapboxgl.NavigationControl(), 'top-right');
  }, []);

  return (
    <section className='section-map'>
      <div ref={mapContainer} className='map-container' id='map' />
    </section>
  );
};

export default TourDetailsMap;
