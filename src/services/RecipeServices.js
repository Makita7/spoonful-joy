import SuperService from './BaseServices'

const BASE_URL = 'https://api.spoonacular.com/recipes'

class MyService extends SuperService {
    getRandomRecipes(n) {
        return this.get(`${BASE_URL}/random?number=${n}`)
    }
}

const service = new MyService()
export default service
