/** Chunk was on 8739 **/
/** chunk id: 359232, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk911969 = require("./911969.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, n) {
  switch (null != t && i()(t.type === e.type, "component type matches state"), e.type) {
    case r.re.BUTTON:
      return null;
    case r.re.STRING_SELECT:
    case r.re.USER_SELECT:
    case r.re.ROLE_SELECT:
    case r.re.MENTIONABLE_SELECT:
    case r.re.CHANNEL_SELECT:
      return ((e, t, n) => {
        let {
          minValues: l,
          maxValues: i,
          required: a
        } = e, o = null == t ? 0 : t.type === r.re.STRING_SELECT ? t.values.length : t.selectedOptions.length;
        return 0 === o ? ("modal" === n ? a : 0 !== l) ? u.intl.string(u.t.eJEUvL) : null : o < l ? u.intl.formatToPlainString(u.t.Jmwzd3, {
          count: l
        }) : o > i ? u.intl.formatToPlainString(u.t.LDvfRE, {
          count: i
        }) : null
      })(e, t, n);
    case r.re.TEXT_INPUT:
      return ((e, t) => {
        let {
          minLength: n,
          maxLength: l,
          required: i
        } = e;
        return null == t || 0 === t.value.length ? i ? u.intl.string(u.t.eJEUvL) : null : t.value.length < n || t.value.length > l ? u.intl.formatToPlainString(u.t.ONSqYW, {
          min: n,
          max: l
        }) : null
      })(e, t);
    default:
      i()(false, "missing validator for this component")
  }
}