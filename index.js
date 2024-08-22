const ipResponse = await fetch('https://api.ipify.org?format=json', {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'GET'
})

const ipJson = await ipResponse.json()

console.log('IP', ipJson)

const brandsResponse = await fetch('https://api.av.by/offer-types/cars/catalog/brand-items', {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'GET'
})

console.log(brandsResponse)