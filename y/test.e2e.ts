describe('Swag Labs App', () => {
    it('deve fazer login com usuário válido', async () => {
        const username = await $('~test-Username')
        await username.setValue('standard_user')

        const password = await $('~test-Password')
        await password.setValue('secret_sauce')

        const loginButton = await $('~test-LOGIN')
        await loginButton.click()

        const productsTitle = await $('android=new UiSelector().text("PRODUCTS")')
        await expect(productsTitle).toBeDisplayed()
    })

    it('deve adicionar um produto ao carrinho', async () => {
        const addToCartButton = await $('android=new UiSelector().text("ADD TO CART").instance(0)')
        await addToCartButton.click()

        const cartIcon = await $('~test-Cart')
        await cartIcon.click()

        const cartTitle = await $('android=new UiSelector().text("YOUR CART")')
        await expect(cartTitle).toBeDisplayed()

        const productName = await $('android=new UiSelector().text("Sauce Labs Backpack")')
        await expect(productName).toBeDisplayed()
    })
})