/** Chunk was on 88934 **/
/** chunk id: 215453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk860719 = require("./860719.js"),
  Chunk63063 = require("./63063.js"),
  Chunk49012 = require("./49012.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk924902 = require("./924902.js");
let p = Chunk63063.Z.getArticleURL(Chunk981631.BhN.BOT_DATA_ACCESS);

function m(e) {
  let {
    application: t
  } = e, {
    hasMessageContent: n,
    hasGuildPresences: s,
    hasGuildMembers: c,
    hasIntents: m
  } = (0, l.w)({
    flags: null == t ? true : t.flags
  }), g = a.useCallback(() => {
    null != t.privacy_policy_url && (0, o.q)({
      href: t.privacy_policy_url
    })
  }, [t.privacy_policy_url]);
  return <div className={u.sectionContainer}>{<i.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{d.intl.string(d.t.QzDgMj)}</i.X6q>}{<div className={u.contentContainer}>{m && <ul className={u.intentsList}>{<i.X6q variant={"heading-md/semibold"} color={"header-secondary"}>{d.intl.string(d.t.U6KH5e)}</i.X6q>}{n && <h icon={i.kBi} heading={d.intl.string(d.t.gJpBOz)} body={d.intl.string(d.t["L+QVbm"])} />}{s && <h icon={i.z65} heading={d.intl.string(d.t.jo0oj4)} body={d.intl.string(d.t.Dm0jq6)} />}{c && <h icon={i.BFJ} heading={d.intl.string(d.t.QZql7O)} body={d.intl.string(d.t["ez/N/f"])} />}</ul>}{<i.Text variant={"text-md/normal"} color={"header-secondary"}>{d.intl.format(d.t.b6nqk5, {
          helpCenterUrl: p
        })}</i.Text>}{null != t.privacy_policy_url && <i.Text variant={"text-md/normal"} color={"header-secondary"} className={u.privacyPolicy}>{d.intl.format(d.t.agYVY2, {
          onClick: g
        })}</i.Text>}</div>}</div>
}

function h(e) {
  let {
    icon: t,
    heading: n,
    body: a
  } = e;
  return <li className={u.intentContainer}>{<t color={"currentColor"} size={"md"} />}{<div className={u.intentTextContainer}>{<i.X6q variant={"heading-md/semibold"} color={"header-secondary"}>{n}</i.X6q>}{<i.Text variant={"text-md/normal"} color={"header-secondary"}>{a}</i.Text>}</div>}</li>
}