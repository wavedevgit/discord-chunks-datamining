/** Chunk was on 83006 **/
/** chunk id: 137508, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  t: () => b
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
let b = () => {
  let {
    message: e,
    channel: t,
    updateMessageText: r
  } = (0, d.Vw)(), b = (0, l.bG)([u.A], () => u.A.getDraft(e.channel_id, u.C.ChannelMessage)), [g, h] = a.useState(() => (0, i.ur)(b)), {
    textValue: y,
    richValue: O
  } = g;
  (0, a.useEffect)(() => {
    r(y)
  }, [r, y]);
  let _ = a.useCallback((t, r, n) => {
      h({
        textValue: r,
        richValue: n
      }), o.A.saveDraft(e.channel_id, r, u.C.ChannelMessage)
    }, [e]),
    [m, j] = a.useState(false),
    w = a.useCallback(() => j(true), []),
    C = a.useCallback(() => j(false), []);
  (0, a.useEffect)(() => () => {
    o.A.clearDraft(e.channel_id, u.C.ChannelMessage)
  }, [e]);
  let v = async () => ({
    shouldClear: true,
    shouldRefocus: false
  });
  return (0, n.jsx)(c.Ay, {
    innerClassName: p.O,
    onChange: _,
    placeholder: f.intl.string(f.t.ZroO3G),
    channel: t,
    textValue: y,
    richValue: O,
    type: s.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
    onBlur: C,
    onFocus: w,
    focused: m,
    onSubmit: v,
    parentModalKey: d.dJ,
    autoCompletePosition: "bottom",
    emojiPickerCloseOnModalOuterClick: true,
    disableThemedBackground: true
  })
}