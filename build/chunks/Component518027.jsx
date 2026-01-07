/** Chunk was on 58973 **/
/** chunk id: 518027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430742 = require("./430742.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk703558 = require("./703558.js"),
  Chunk135102 = require("./135102.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31877 = require("./31877.js");
let p = () => {
  let {
    message: e,
    channel: t,
    updateMessageText: n
  } = (0, d.C$)(), p = (0, o.e7)([u.Z], () => u.Z.getDraft(e.channel_id, u.d.ChannelMessage)), [g, h] = a.useState(() => (0, s.eK)(p)), {
    textValue: m,
    richValue: y
  } = g;
  (0, a.useEffect)(() => {
    n(m)
  }, [n, m]);
  let O = a.useCallback((t, n, r) => {
      h({
        textValue: n,
        richValue: r
      }), l.Z.saveDraft(e.channel_id, n, u.d.ChannelMessage)
    }, [e]),
    [C, j] = a.useState(false),
    _ = a.useCallback(() => j(true), []),
    w = a.useCallback(() => j(false), []);
  (0, a.useEffect)(() => () => {
    l.Z.clearDraft(e.channel_id, u.d.ChannelMessage)
  }, [e]);
  let v = async () => ({
    shouldClear: true,
    shouldRefocus: false
  });
  return (0, r.jsx)(i.ZP, {
    innerClassName: f.messageInput,
    onChange: O,
    placeholder: b.intl.string(b.t.ZroO3G),
    channel: t,
    textValue: m,
    richValue: y,
    type: c.Ie.SHARE_CUSTOM_CLIENT_THEME_INPUT,
    onBlur: w,
    onFocus: _,
    focused: C,
    onSubmit: v,
    parentModalKey: d.tj,
    autoCompletePosition: "bottom",
    emojiPickerCloseOnModalOuterClick: true,
    disableThemedBackground: true
  })
}