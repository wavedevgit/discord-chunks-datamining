/** Chunk was on 27978 **/
/** chunk id: 913583, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk760213 = require("./760213.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk122605 = require("./122605.js");

function d(e) {
  let {
    onDismiss: t
  } = e;
  return (0, o.Z)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
  }), <s.ZP className={u.chooseAccountAuthBox}>{<s.Dx>{c.intl.string(c.t["bVbB6+"])}</s.Dx>}{<l.Text className={u.chooseAccountHelpText} variant={"text-md/normal"} color={"header-secondary"}>{c.intl.string(c.t["0M5fNz"])}</l.Text>}{<a.Z actionText={c.intl.string(c.t["DSN+h4"])} onAction={e => {
        e === a.W.LOGIN_REQUIRED && t()
      }} />}{<div className={u.actions}><l.Avr variant={"secondary"} size={"md"} textVariant={"text-sm/medium"} text={c.intl.string(c.t["9g2mqa"])} onClick={t} /></div>}</s.ZP>
}