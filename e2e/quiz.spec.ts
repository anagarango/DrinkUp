import {test, devices, expect} from '@playwright/test';

let urlQuiz = "http://localhost:3000/quiz";

test.describe('Testing for quiz page', () => {

    test('Testing flexbox css', async({ page }) => { 
      await page.goto(urlQuiz)
      
      const container = page.locator('#flex');
  
      const grabbedDisplay = await container.evaluate((ele) => {
          return window.getComputedStyle(ele).getPropertyValue("min-height")
      })
      console.log(grabbedDisplay);
      expect(grabbedDisplay).toBe("fit-content");
  })


  test('Testing heading css', async({ page }) => { 
    await page.goto(urlQuiz)
    
    const container = page.locator('#heading');

    const grabbedFont = await container.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("font-size")
    })
    console.log(grabbedFont);
    expect(grabbedFont).toBe("88.8px");
    })


    test('Testing paragraph properties', async({ page }) => { 
        await page.goto(urlQuiz)
        
        const container = page.locator('#paragraph');

        const textAlign = await container.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("text-align")
        })
        console.log(textAlign);
        expect(textAlign).toBe("end");


        const padding = await container.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("padding")
        })
        console.log(padding);
        expect(padding).toBe("50px 0px 0px");
    })

})