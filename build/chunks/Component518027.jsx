/** Chunk was on 67261 **/
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
  Chunk337269 = require("./337269.js");
let p = () => {
  let {
    message: e,
    channel: t,
    updateMessageText: n
  } = (0, Chunk135102.C$)(), p = (0, Chunk442837.e7)([Chunk703558.Z], () => Chunk703558.Z.getDraft(module.channel_id, Chunk703558.d.ChannelMessage)), [g, h] = Chunk473749.useState(() => (0, Chunk752305.eK)(p)), {
    textValue: _,
    richValue: m
  } = g;
  (0, Chunk473749.useEffect)(() => {
    require(_)
  }, [require, _]);
  let y = Chunk473749.useCallback((t, n, r) => {
      h({
        textValue: n,
        richValue: r
      }), l.Z.saveDraft(e.channel_id, n, u.d.ChannelMessage)
    }, [module]),
    [O, C] = Chunk473749.useState(false),
    j = Chunk473749.useCallback(() => C(true), []),
    w = Chunk473749.useCallback(() => C(false), []);
  (0, Chunk473749.useEffect)(() => () => {
    Chunk430742.Z.clearDraft(module.channel_id, Chunk703558.d.ChannelMessage)
  }, [module]);
  let v = async () => ({
    shouldClear: true,
    shouldRefocus: false
  });
  return (0, Chunk54381.jsx)(Chunk893718.ZP, {
    innerClassName: Chunk337269.messageInput,
    onChange: y,
    placeholder: Chunk388032.intl.string(Chunk388032.t.ZroO3G),
    channel: exports,
    textValue: _,
    richValue: m,
    type: Chunk541716.Ie.SHARE_CUSTOM_CLIENT_THEME_INPUT,
    onBlur: w,
    onFocus: j,
    focused: O,
    onSubmit: v,
    parentModalKey: Chunk135102.tj,
    autoCompletePosition: "bottom",
    emojiPickerCloseOnModalOuterClick: true,
    disableThemedBackground: true
  })
}