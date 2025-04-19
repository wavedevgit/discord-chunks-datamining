/** Chunk was on 58120 **/
n.d(t, {
  Z: () => d
}), n(388685), n(539854);
var i = n(836560),
  r = n(358085),
  s = n(998502),
  o = n(13140),
  l = n(981631);
let a = [],
  c = (e, t, n) => {
    let i = +!(0, r.isWindows)();
    (e !== l.MoX.MOUSE_BUTTON || n !== i) && a.forEach(i => i._handleEvent(e, t, n))
  };
class d extends i.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (a = a.filter(e => e !== this)).length && s.ZP.setOnInputEventCallback(null)
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
    }) : this[e] = t, a.push(this), 1 === a.length && s.ZP.setOnInputEventCallback(c)
  }
}