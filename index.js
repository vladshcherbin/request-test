import Koa from 'koa'

const app = new Koa()

app.use(async ctx => {
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
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
    },
    method: 'GET'
  })

  if (brandsResponse.ok) {
    console.log(await brandsResponse.json())
  } else {
    console.log('brands request error')
    console.log(brandsResponse)
  }
  

  ctx.body = 'Hello World'
})

app.listen(process.env.PORT)