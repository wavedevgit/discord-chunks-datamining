/** Chunk was on 58023 **/
n.d(t, {
  Z: () => v
});
var r = n(200651);
n(192379);
var l = n(120356),
  i = n.n(l),
  a = n(780384),
  s = n(481060),
  o = n(410030),
  c = n(44315),
  d = n(208567),
  u = n(981631),
  m = n(116575);

function x(e) {
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
let g = u.Ilk.PRIMARY_400,
  h = u.Ilk.PRIMARY_500;

function v(e) {
  var {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: l
  } = e, u = function(e, t) {
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
  let v = (0, o.ZP)(),
    f = (0, a.wj)(v) ? g : h,
    p = {
      height: 18,
      width: 18,
      color: (0, c.Lq)(f)
    };
  return (0, r.jsx)(d.Z, x({
    className: i()({
      [m.avatarUploader]: t,
      [m.avatarUploaderDisabled]: !t
    }),
    imageClassName: i()(n, m.avatarUploaderInnerSquare, {
      [m.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != u.image && "" !== u.image ? (0, r.jsx)(s.vdY, x({
      size: "custom"
    }, p)) : (0, r.jsx)(s.FmF, x({
      size: "custom"
    }, p)),
    iconClassName: i()(m.avatarUploadIcon, m.hideDefaultIcon),
    iconWrapperClassName: l,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0
  }, u))
}