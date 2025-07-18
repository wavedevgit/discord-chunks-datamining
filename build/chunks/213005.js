/** Chunk was on 58120 **/
n.d(t, {
  Z: () => d
}), n(388685), n(539854);
var i = n(836560),
  r = n(358085),
  s = n(998502),
  o = n(13140),
  a = n(981631);
let l = [],
  c = (e, t, n) => {
    let i = +!(0, r.isWindows)();
    (e !== a.MoX.MOUSE_BUTTON || n !== i) && l.forEach(i => i._handleEvent(e, t, n))
  };
class d extends i.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (l = l.filter(e => e !== this)).length && s.ZP.setOnInputEventCallback(null)
  }
  toString() {
    return (0, o.BB)(this.combo)
  }
  _handleEvent(e, t, n) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [i, r] = t;
      return i !== e || r !== n
    }) : (this.combo.push([e, n, (0, o.dU)()]), this.emit("change", this))
  }
  constructor() {
    var e, t;
    super(), t = [], (e = "combo") in this ? Object.defineProperty(this, e, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : this[e] = t, l.push(this), 1 === l.length && s.ZP.setOnInputEventCallback(c)
  }
}