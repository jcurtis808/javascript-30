const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
let cities = [];

fetch(endpoint)
.then(response => response.json())
.then(data => cities.push(...data))

function filterData(e) {
    let target = `${e.target.value}`.toUpperCase();
    // let filtered = [];
   return cities.filter(item => {
        let city2 = item.city.toUpperCase();
        let state2 = item.state.toUpperCase();
        if(city2.includes(target) || state2.includes(target)){
            // filtered.push(item);
            return item;
        }
    })
}

function displayMatches(e) {
    const matchedArray = filterData(e);
    const html = matchedArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
          </li>
        `;
      }).join('');
      suggestions.innerHTML = html;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//     const html = filtered.map(result => {
//         return `
//             <li>
//                 <span class='name'>${result.city}, ${result.state}</span>
//                 <span class='population'>${result.population}</span>
//             </li>
//         `;
//     })
//     suggestions.innerHTML = html.join('');
// }

input.addEventListener('input', displayMatches);