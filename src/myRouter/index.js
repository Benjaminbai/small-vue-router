let Vue = {}
class VueRouter {
    constructor(options) {
        // this.current = '/'
        Vue.util.defineReactive(this, 'current', '/')
        this.routes = options.routes
        this.mode = options.mode || 'hash'
        this.init()
    }
    init() {
        if (this.mode === 'hash') {

            window.addEventListener('load', () => {
                this.current = location.hash.slice(1)
            })

            window.addEventListener('hashchange', () => {
                this.current = location.hash.slice(1)
            })
        }
    }
}

VueRouter.install = function (_Vue) {
    Vue = _Vue
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
            }
        }
    })
    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                default: '',
                require: true
            }
        },
        render(h) {
            return h('a', {
                attrs: {
                    href: '#' + this.to
                }
            }, this.$slots.default)
        }
    })
    Vue.component('router-view', {

        render(h) {
            let current = this.$router.current
            let routes = this.$router.routes
            let com = routes.find(v => current === v.path)
            return h(com.component)
        }
    })
}

export default VueRouter
