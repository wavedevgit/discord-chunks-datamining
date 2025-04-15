/** Chunk was on 58023 **/
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var l = n(120356),
  i = n.n(l),
  a = n(780384),
  s = n(481060),
  o = n(410030),
  c = n(44315),
  u = n(208567),
  d = n(981631),
  m = n(758253);

function h(e) {
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
}
let g = d.Ilk.PRIMARY_400,
  x = d.Ilk.PRIMARY_500;

function p(e) {
  var {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: l
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["enabled", "imageClassName", "iconWrapperClassName"]);
  let p = (0, o.ZP)(),
    f = (0, a.wj)(p) ? g : x,
    v = {
      height: 18,
      width: 18,
      color: (0, c.Lq)(f)
    };
  return (0, r.jsx)(u.Z, h({
    className: i()({
      [m.avatarUploader]: t,
      [m.avatarUploaderDisabled]: !t
    }),
    imageClassName: i()(n, m.avatarUploaderInnerSquare, {
      [m.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != d.image && "" !== d.image ? (0, r.jsx)(s.vdY, h({
      size: "custom"
    }, v)) : (0, r.jsx)(s.FmF, h({
      size: "custom"
    }, v)),
    iconClassName: i()(m.avatarUploadIcon, m.hideDefaultIcon),
    iconWrapperClassName: l,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0
  }, d))
}