
const Page = require("./helpers/page")

let page;

beforeEach(async() => {
 page = await Page.build()
  await page.goto("http://localhost:3000");
  await page.setViewport({ width: 1080, height: 1024 });
})

afterEach(async() => {
  await page.close();
})

// test("We can launch a browser", async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     // args: ['--no-sandbox']
//   });
//   const page = await browser.newPage();
//   // await page.reload({ waitUntil: 'domcontentloaded' })
// // await page.on('load', () => console.log('DOM actually loaded'))
//   await page.goto("http://localhost:3000");
//   // await page.setViewport({ width: 1080, height: 1024 });
// });


test('when signed in, shows logout button', async () => {
  await page.login();

  // const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML = el.innerHTML);
  const text = await page.getContentsOf('a.brand-logo')

  expect(text).toEqual("Logout")

})


// test("We can launch a browser", async() => {
// const browser = await puppeteer.launch(
  
//   {
//     headless: false
//   });
// const page = await browser.newPage();
//   await page.goto("http://localhost:3000");
//    await page.setViewport({width: 1080, height: 1024})
// })

// beforeAll(done => {
//   done()
// })

// afterAll(done => {
//   // Closing the DB connection allows Jest to exit successfully.
//   mongoose.connection.close()
//   done()
// })