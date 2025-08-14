/** Chunk was on 7384 **/
/** chunk id: 122897, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk78451 = require("./78451.js"),
  Chunk695346 = require("./695346.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk973005 = require("./973005.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk918526 = require("./918526.js");

function h() {
  var e;
  let t = Chunk695346.Xr.useSetting(),
    n = Chunk695346.UP.useSetting(),
    h = exports !== Chunk524437.Xr.DEFAULT_UNSET ? exports : null != (e = Chunk973005.O7.get(require)) ? module : Chunk524437.Xr.NON_FRIENDS;
  return (0, Chunk255367.jsxs)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
    children: [(0, Chunk255367.jsx)(Chunk838436.H, {
      header: Chunk388032.intl.string(Chunk388032.t.tiCXaG),
      description: Chunk388032.intl.format(Chunk388032.t.RvjRRE, {
        appealLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SAFE_DIRECT_MESSAGING)
      })
    }), (0, Chunk255367.jsx)(Chunk481060.FXm, {
      className: Chunk918526.radioGroup,
      radioItemClassName: Chunk918526.radioGroupItem,
      value: h,
      options: (0, Chunk78451.c7)(),
      onChange: e => {
        let {
          value: t
        } = e;
        return o.Xr.updateSetting(t)
      }
    })]
  })
}