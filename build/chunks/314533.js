/** Chunk was on 1272 (46194273c01318d9.js) **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
  l = n(570140),
  o = n(317770);
let a = "CONNECTIONS_GRID_MODAL_KEY";
class s extends o.Z {
  _initialize() {
    l.Z.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.Z.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  _terminate() {
    l.Z.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.Z.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  handleShow(e) {
    let {
      onComplete: t,
      excludedPlatformTypes: l,
      includedPlatformTypes: o,
      integrations: s,
      onCompleteApplication: c
    } = e;
    (0, i.nfh)(a) || (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("28538").then(n.bind(n, 51299));
      return n => (0, r.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({
        onComplete: t,
        excludedPlatformTypes: l,
        includedPlatformTypes: o,
        integrations: s,
        onCompleteApplication: c
      }, n))
    })
  }
  handleHide() {
    (0, i.Mr3)(a)
  }
}
let c = new s