import { test, expect } from '@playwright/test'

let urlClubs = "http://localhost:3000/clubs";

test.describe('Testing clubs page', () => {

    test('The title tag', async({ page }) => {
        await page.goto(urlClubs)

        await expect(page).toHaveTitle('DrinkUp - Clubs');
    })

    test('The favicon', async ({ page }) => {
        await page.goto(urlClubs)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', "/drinkup logo.png")
    })


    test('Testing background image', async({ page }) => { 
        await page.goto(urlClubs)
        
        const container = page.locator('#flex');
    
        const grabbedBgImage = await container.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-image")
        })
        console.log(grabbedBgImage);
        expect(grabbedBgImage).toBe("url(\"http://localhost:3000/brickwall.jpeg\")");
    })

    test('Testing box properties', async({ page }) => { 
        await page.goto(urlClubs)
        
        const container = page.locator('#box');
    
        const grabbedFlex = await container.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("flex-direction")
        })
        console.log(grabbedFlex);
        expect(grabbedFlex).toBe("column");



        const grabbedWidth = await container.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("width")
        })
        console.log(grabbedWidth);
        expect(grabbedWidth).toBe("500px");
    })

})