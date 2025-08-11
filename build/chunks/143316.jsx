/** Chunk was on 34779 **/
/** chunk id: 143316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk288552 = require("./288552.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk413813 = require("./413813.js");

function h(e) {
  let {
    type: t,
    onClick: n
  } = e, [l, h] = i.useState(false), f = () => {
    n(), s.default.track(c.rMx.INBOX_CHANNEL_ACKED, {
      marked_all_channels_as_read: true,
      num_unread_channels_remaining: 0
    })
  }, g = e => {
    e.shiftKey ? f() : h(true)
  };
  return <r.Fragment>{l ? <p confirm={f} cancel={() => h(false)} /> : null}{"bottom-floating" === t ? <a.a text={u.intl.string(u.t["8k+6QU"])} icon={o.W6s} onClick={g} /> : <o.M0o tooltip={u.intl.string(u.t["8k+6QU"])} color={o.YX$.TERTIARY} icon={(0, r.jsx)(o.W6s, {
        size: "xs",
        color: "currentColor"
      })} className={d.controlButton} onClick={g} />}</r.Fragment>
}

function p(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return <o.sYh dismissable={true} header={u.intl.string(u.t.h4bVZ2)} confirmText={u.intl.string(u.t.e6RscX)} cancelText={u.intl.string(u.t["ETE/oK"])} confirmButtonColor={l.zx.Colors.BRAND} onCancel={t} onConfirm={n}><o.Text color={"text-default"} variant={"text-sm/normal"}>{u.intl.string(u.t["0MQ0BQ"])}</o.Text></o.sYh>
}