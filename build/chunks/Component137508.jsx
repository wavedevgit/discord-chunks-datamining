/** Chunk was on 83006 **/
/** chunk id: 137508, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  t: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk465532 = require("./465532.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk31717 = require("./31717.js"),
  Chunk457417 = require("./457417.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk316582 = require("./316582.js");
let p = () => {
  let {
    message: e,
    channel: t,
    updateMessageText: r
  } = (0, d.Vw)(), p = (0, l.bG)([u.A], () => u.A.getDraft(e.channel_id, u.C.ChannelMessage)), [g, y] = a.useState(() => (0, c.ur)(p)), {
    textValue: h,
    richValue: O
  } = g;
  (0, a.useEffect)(() => {
    r(h)
  }, [r, h]);
  let m = a.useCallback((t, r, n) => {
      y({
        textValue: r,
        richValue: n
      }), o.A.saveDraft(e.channel_id, r, u.C.ChannelMessage)
    }, [e]),
    [j, w] = a.useState(false),
    C = a.useCallback(() => w(true), []),
    v = a.useCallback(() => w(false), []);
  (0, a.useEffect)(() => () => {
    o.A.clearDraft(e.channel_id, u.C.ChannelMessage)
  }, [e]);
  let P = async () => ({
    shouldClear: true,
    shouldRefocus: false
  });
  return (0, n.jsx)(i.Ay, {
    innerClassName: b.O,
    onChange: m,
    placeholder: f.intl.string(f.t.ZroO3G),
    channel: t,
    textValue: h,
    richValue: O,
    type: s.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
    onBlur: v,
    onFocus: C,
    focused: j,
    onSubmit: P,
    parentModalKey: d.dJ,
    autoCompletePosition: "bottom",
    emojiPickerCloseOnModalOuterClick: true,
    disableThemedBackground: true
  })
}