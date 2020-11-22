function authentication(to, next) {
    console.log('entrou')
    var auth = localStorage.user
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (auth == undefined) {
          next({
            path: '/login',
            query: { redirect: to.fullPath, expired:true },
          })
        } else {
          next()
        }
      } else {
        next()
      }
}

export {authentication}