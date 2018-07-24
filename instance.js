var obj = { 
	foo: 'bar'
}
Object.freeze(obj)

new Vue({
	el: '#instance-1',
	data: obj
});

// Instance Lifecycle Hooks: created 
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
})