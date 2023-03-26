import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";


test.describe('Testing homepage', () => {


    test('The meta tag', async ({ page }) => { 
        await page.goto(urlHome)
        
        const metaDescriptionOne = page.locator('meta[name="og:drinkup"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Making your drink decisions easier")

        const metaDescriptionTwo = page.locator('meta[property="og:title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Final Project')
    })

    test('Testing background', async({ page }) => { 
        await page.goto(urlHome)
        
        const container = page.locator('#image');
    
        const grabbedLink = await container.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-image")
        })
        console.log(grabbedLink);
        expect(grabbedLink).toBe("url(\"http://localhost:3000/Hero.png\")");

        const grabbedPosition = await container.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-position")
        })
        console.log(grabbedPosition);
        expect(grabbedPosition).toBe("50% 100%");
    })

    test('Text', async({ page }) => {
        await page.goto(urlHome)
        await expect(page.locator('#textCursive')).toContainText('Simplifying your Cocktail Preferences');

        await expect(page.locator('#textParagraph')).toContainText('A pain-point that became a project, inspired to help new-legal aged people to find their favourite cocktails to order in their next pub, bar, and/or nightclub visit.');
    })

})