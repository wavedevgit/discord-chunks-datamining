/** Chunk was on 26196 **/
/** chunk id: 518027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430742 = require("./430742.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk703558 = require("./703558.js"),
  Chunk135102 = require("./135102.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk784562 = require("./784562.js");
let p = () => {
  let {
    message: e,
    channel: t,
    updateMessageText: n
  } = (0, Chunk135102.C$)(), p = (0, Chunk442837.e7)([Chunk703558.Z], () => Chunk703558.Z.getDraft(module.channel_id, Chunk703558.d.ChannelMessage)), [g, h] = Chunk647438.useState(() => (0, Chunk752305.eK)(p)), {
    textValue: _,
    richValue: m
  } = g;
  (0, Chunk647438.useEffect)(() => {
    require(_)
  }, [require, _]);
  let y = Chunk647438.useCallback((t, n, r) => {
      h({
        textValue: n,
        richValue: r
      }), l.Z.saveDraft(e.channel_id, n, u.d.ChannelMessage)
    }, [module]),
    [O, C] = Chunk647438.useState(false),
    j = Chunk647438.useCallback(() => C(true), []),
    w = Chunk647438.useCallback(() => C(false), []);
  (0, Chunk647438.useEffect)(() => () => {
    Chunk430742.Z.clearDraft(module.channel_id, Chunk703558.d.ChannelMessage)
  }, [module]);
  let v = async () => ({
    shouldClear: true,
    shouldRefocus: false
  });
  return (0, Chunk951288.jsx)(Chunk893718.ZP, {
    innerClassName: Chunk784562.messageInput,
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