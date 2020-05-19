import Api from '@/services/Api'

export default {

    getCompany (company) {
        return Api().get('/company', {
            params: {
                company: company
            }
        })
    }
}