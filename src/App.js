import React, { Component } from 'react';
import * as locations from './locations.json';
import Map from './Map'



class App extends Component {
  state = {
    venue: locations,
    searchedVenues: '',
    placeToShow: '',
    isOpen: false,
    error: false,
    infoContent: ""
  }
  render() {
    return (
      <div className="App">
        <main className='main-page'>
          <div className='right-section'>
            <section tabIndex='0'>

              <Map
                // venueName={showingVenueName}
                onToggleOpen={this.onToggleOpen}
                // venue={showingVenueName}
                getInfo={this.getInfo}
                infoContent={this.state.infoContent}
                placeToShow={this.state.placeToShow}
                isOpen={this.state.isOpen}
                containerElement={<div className='containerElement'/>}
                mapElement={<div className='mapElement' />}
                loadingElement={<div className='loadingElement' />}
                googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyB6KuC_x__0u1uAEBxlPIb1LL-r7U8nFwQ&v=3'//rimettere la mia piu tardi
              />

            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
