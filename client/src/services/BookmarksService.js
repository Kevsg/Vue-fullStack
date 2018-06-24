import Api from '@/services/Api'

export default {
    index (bookmark) {
        return Api().get('bookmarks', {
            params: params
        })
    },
    post (bookmark) {
        return Api().post('bookmarks', {
            params: params
        })
    },
    delete (bookmarkId) {
        return Api().get(`bookmarks/${bookmarkId}`,)
    }
}
