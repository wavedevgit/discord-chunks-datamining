/** Chunk was on 34779 **/
/** chunk id: 326838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk782568 = require("./782568.js"),
  Chunk317632 = require("./317632.js"),
  Chunk174767 = require("./174767.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk388032 = require("./388032.js"),
  Chunk8298 = require("./8298.js");

function O(e) {
  let {
    invite: t,
    expired: n
  } = e, l = (0, s.e7)([f.default], () => {
    var e, n;
    return null != (n = null == (e = f.default.getUser(t.inviter_id)) ? true : e.username) ? n : ""
  }), a = (0, g.vc)(o()(t.created_at), "LT"), d = i.useRef(null), h = (0, u.Z)(d);
  return i.useEffect(() => {
    n || (0, p.Br)(t)
  }, [t, n]), <div className={b.container} ref={d}>{<div className={b.primaryRow}>{<img className={b.inviteImage} src={t.application_asset} alt={"Game Invite"} />}{<c.Text className={b.title} variant={"text-md/semibold"} color={"interactive-active"}>{m.intl.format(m.t.vtUO3d, {
          username: l
        })}</c.Text>}{<div className={b.buttonContainer}>{<_ expired={n} invite={t} isHoveringInvite={h} />}{<c.M0o className={b.deleteButton} tooltip={m.intl.string(m.t.oyYWHB)} color={c.YX$.SECONDARY} icon={(0, r.jsx)(c.XHJ, {
            size: "xs"
          })} onClick={() => {
            (0, p.UF)(t)
          }} />}</div>}</div>}{<div className={b.divider} />}{<div className={b.secondaryRow}>{<c.Text variant={"text-xs/medium"} className={b.subtitle} color={"text-muted"}>{t.application_name}{" \xb7 "}{a}</c.Text>}{n && <div className={b.metaContainer}><c.Text variant={"text-xxs/semibold"} className={b.__invalid_metaText} color={"text-muted"}>{m.intl.string(m.t["//8Uqa"])}</c.Text></div>}</div>}</div>
}

function _(e) {
  let {
    expired: t,
    invite: n,
    isHoveringInvite: l
  } = e, o = (0, s.e7)([h.Z], () => h.Z.isInviteGameInstalled(n)), u = (0, s.e7)([h.Z], () => h.Z.isInviteJoinable(n)), [f, g] = i.useState(false), O = i.useCallback(async () => {
    g(true);
    try {
      await (0, p.MH)(n)
    } catch (e) {}
    g(false)
  }, [n]), _ = i.useCallback(async () => {
    g(true);
    try {
      await (0, p.Ol)(n)
    } catch (e) {}
    g(false)
  }, [n]);
  if (t)
    if (o && l) return <a.zx className={b.primaryButton} color={a.Tt.TRANSPARENT} disabled={f} size={a.Ph.SMALL} onClick={O}>{m.intl.string(m.t["s+J8Dg"])}</a.zx>;
    else return null;
  return o && u ? <a.zx className={b.primaryButton} color={a.Tt.GREEN} disabled={f} size={a.Ph.SMALL} onClick={_}>{m.intl.string(m.t["/loN9/"])}</a.zx> : null != n.fallback_url ? <a.zx className={b.primaryButton} disabled={f} size={a.Ph.SMALL} color={a.Tt.TRANSPARENT} onClick={() => (0, d.Z)(n.fallback_url)}>{m.intl.string(m.t["27y8KC"])}</a.zx> : <c.ua7 text={m.intl.formatToPlainString(m.t.issFLC, {
      gameTitle: n.application_name
    })}>{e => {
      var t, i;
      return (0, r.jsx)(a.zx, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e), i = i = {
        className: b.primaryButton,
        disabled: true,
        size: a.Ph.SMALL,
        color: a.Tt.TRANSPARENT,
        onClick: () => (0, d.Z)(n.fallback_url),
        children: (0, r.jsxs)("div", {
          className: b.launchToJoinContainer,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-xxs/medium",
            className: b.launchToJoinText,
            color: "text-muted",
            children: m.intl.string(m.t.dai1Oz)
          }), (0, r.jsx)(c.d3s, {
            size: "xxs",
            color: c.TVs.colors.TEXT_MUTED.css
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }}</c.ua7>
}