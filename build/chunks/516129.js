/** Chunk was on 58023 **/
n.d(t, {
  Z: () => v
});
var l = n(200651);
n(192379);
var r = n(120356),
  i = n.n(r),
  a = n(780384),
  s = n(481060),
  o = n(410030),
  c = n(44315),
  u = n(208567),
  d = n(981631),
  m = n(758253);

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}
let g = d.Ilk.PRIMARY_400,
  h = d.Ilk.PRIMARY_500;

function v(e) {
  var {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: r
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, l, r = function(e, t) {
      if (null == e) return {};
      var n, l, r = {},
        i = Object.keys(e);
      for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["enabled", "imageClassName", "iconWrapperClassName"]);
  let v = (0, o.ZP)(),
    f = (0, a.wj)(v) ? g : h,
    p = {
      height: 18,
      width: 18,
      color: (0, c.Lq)(f)
    };
  return (0, l.jsx)(u.Z, x({
    className: i()({
      [m.avatarUploader]: t,
      [m.avatarUploaderDisabled]: !t
    }),
    imageClassName: i()(n, m.avatarUploaderInnerSquare, {
      [m.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != d.image && "" !== d.image ? (0, l.jsx)(s.vdY, x({
      size: "custom"
    }, p)) : (0, l.jsx)(s.FmF, x({
      size: "custom"
    }, p)),
    iconClassName: i()(m.avatarUploadIcon, m.hideDefaultIcon),
    iconWrapperClassName: r,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0
  }, d))
}