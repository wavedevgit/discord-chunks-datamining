/** Chunk was on 34779 **/
/** chunk id: 426521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => G
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk906732 = require("./906732.js"),
  Chunk812206 = require("./812206.js"),
  Chunk336197 = require("./336197.js"),
  Chunk454585 = require("./454585.js"),
  Chunk833062 = require("./833062.js"),
  Chunk892001 = require("./892001.js"),
  Chunk695346 = require("./695346.js"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk591759 = require("./591759.js"),
  Chunk833592 = require("./833592.js"),
  Chunk497089 = require("./497089.js"),
  Chunk178480 = require("./178480.js"),
  Chunk418316 = require("./418316.js"),
  Chunk382865 = require("./382865.js"),
  Chunk526146 = require("./526146.js"),
  Chunk400565 = require("./400565.jsx"),
  Chunk148789 = require("./148789.jsx"),
  Chunk11825 = require("./11825.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk884492 = require("./884492.js"),
  Chunk756688 = require("./756688.js"),
  Chunk886765 = require("./886765.js");

function D(e) {
  var t, n, i, l, s;
  let {
    item: c
  } = e, u = null == (t = c.message) ? true : t.content;
  if (null == u) return <div />;
  let d = null != (s = b.default.getUser(null == (i = c.message) || null == (n = i.author) ? true : n.id)) ? s : new m.Z(null == (l = c.message) ? true : l.author),
    p = h.Z.parse(u);
  return <div className={T.messagePreviewContainer}>{<a.Z user={d} size={o.EFr.SIZE_24} />}{<o.Text className={T.messagePreviewText} variant={"text-sm/normal"} lineClamp={2}>{p}</o.Text>}</div>
}

function L(e) {
  let {
    item: {
      callout: t
    }
  } = e;
  if (null == t) return null;
  let n = h.Z.parse(t);
  return <div className={T.calloutContainer}><o.Text variant={"text-sm/normal"} lineClamp={2}>{n}</o.Text></div>
}

function M(e) {
  let {
    item: t
  } = e, n = R, i = Z.intl.string(Z.t.SJTHJS);
  return t.completed && (n = A, i = Z.intl.string(Z.t.f6RTAA)), <div className={T.lifecycleContainer}>{<img className={T.checkbox} alt={""} src={n} />}{<o.Text className={T.lifecycleText} variant={"text-xs/bold"} color={"header-secondary"}>{i}</o.Text>}</div>
}

function k(e) {
  let {
    applicationId: t
  } = e, n = (0, l.e7)([u.Z], () => u.Z.getApplication(t));
  return null == n ? <div /> : <p.Z application={n} />
}
let U = Chunk73800.memo(function(e) {
    var t;
    let {
      item: l,
      ackedBeforeId: a
    } = e, {
      analyticsLocations: u
    } = (0, c.ZP)(), p = (0, x.I)(l, a), g = i.useCallback(async () => {
      if (p || (0, C.wt)(l), null != l.item_enum && l.item_enum === v.AM.FIND_FRIENDS) return void(0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("6074").then(n.bind(n, 443189));
        return t => <e{...function(e) {
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
        }({
          source: "Notification Center"
        }, t)} />
      });
      if (null != l.deeplink) {
        let t = y.Z.safeParseWithQuery(l.deeplink);
        if (null == t) return;
        let n = t.hostname,
          r = t.path;
        if (null == n || null == r) return;
        if (y.Z.isDiscordHostname(n)) {
          let t = r.match("^/users/(\\d+)");
          if (null != t && 2 === t.length) {
            var e;
            (0, f.openUserProfileModal)({
              userId: t[1],
              messageId: null == (e = l.message) ? true : e.id,
              sourceAnalyticsLocations: u
            })
          } else await (0, d.Z)(r)
        }
        O.default.track(w.rMx.NOTIFICATION_CENTER_ACTION, {
          action_type: v.ud.CLICKED,
          notification_center_id: l.id,
          item_type: l.type,
          acked: p
        })
      }
    }, [l, p, u]), m = null;
    l.type === v.O7.INCOMING_FRIEND_REQUESTS && null != l.other_user ? m = <P.Z userId={l.other_user.id} /> : l.type === v.O7.INCOMING_GAME_FRIEND_REQUESTS && null != l.other_user && (m = <P.Z userId={l.other_user.id} applicationId={l.applicationId} />);
    let b = null != l.local_id,
      S = (0, E.Z)({
        item: l,
        renderApplication: e => <k applicationId={e} />
      }),
      {
        emoji_id: Z,
        emoji_name: A
      } = l,
      R = null != Z || null != A ? <s.Z className={T.emoji} emojiId={Z} emojiName={A} /> : null;
    return <div className={T.row}>{<o.kL8 className={T.rowContent} focusProps={{
          offset: 4
        }} aria-label={S} onClick={g}>{p ? null : <div className={T.unread} />}{<I.U item={l} />}{<div className={T.body}>{"lifecycle_item" === l.type && null != l.item_enum && <M item={l} />}{<o.Text variant={"text-md/normal"} color={p ? "text-muted" : "text-default"}>{"string" != typeof S ? S : h.Z.parse(S)}{R}</o.Text>}{(null == (t = l.message) ? true : t.content) != null ? <D item={l} /> : null}{null != l.callout ? <L item={l} /> : null}{<o.Text variant={"text-xs/medium"} color={p ? "text-muted" : "header-secondary"}>{(0, j.a3)(_.default.extractTimestamp(l.id))}</o.Text>}{m}</div>}</o.kL8>}{b ? null : <N.z item={l} />}</div>
  }),
  G = Chunk73800.memo(function(e) {
    let {
      items: t
    } = e, n = g.d$.useSetting();
    return (0, S.c)(t), <r.Fragment>{t.map(e => (0, r.jsx)(U, {
        item: e,
        ackedBeforeId: n
      }, e.id))}</r.Fragment>
  })