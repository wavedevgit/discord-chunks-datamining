/** Chunk was on 34779 **/
/** chunk id: 264233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk317632 = require("./317632.js"),
  Chunk174767 = require("./174767.js"),
  Chunk240126 = require("./240126.jsx"),
  Chunk791914 = require("./791914.js"),
  Chunk326838 = require("./326838.js"),
  Chunk388032 = require("./388032.js"),
  Chunk175646 = require("./175646.js");

function b(e) {
  let {
    setTab: t,
    badgeState: l,
    closePopout: b
  } = e, _ = (0, s.Wu)([u.Z], () => u.Z.getInvites()), y = (0, s.e7)([u.Z], () => u.Z.getInviteStatuses()), [C, v] = i.useMemo(() => o().partition(_, e => {
    var t;
    return (null == (t = y[e.invite_id]) ? true : t.joinable) !== false && (Date.now() - new Date(e.created_at).getTime()) / 1e3 < e.ttl
  }), [_, y]);
  return (i.useEffect(() => {
    (0, d.sJ)()
  }), 0 === _.length) ? <div className={m.container}>{<p.Z tab={a.X.GAME_INVITES} setTab={t} badgeState={l} closePopout={b} />}{<div className={m.__invalid_emptyStateContainer}><h.Z Icon={c.iWm} header={g.intl.string(g.t.PbSPWV)} tip={g.intl.string(g.t.BxNbS0)} /></div>}</div> : <div className={m.container}><c.y5t component={(0, r.jsx)(p.Z, {
        tab: a.X.GAME_INVITES,
        setTab: t,
        badgeState: l,
        closePopout: b,
        children: (0, r.jsx)(c.M0o, {
          className: m.__invalid_deleteButton,
          tooltip: g.intl.string(g.t.Zy3MR0),
          color: c.YX$.SECONDARY,
          icon: (0, r.jsx)(c.XHJ, {
            size: "xs"
          }),
          onClick: function() {
            (0, c.ZDy)(async () => {
              let {
                default: e
              } = await n.e("13111").then(n.bind(n, 93756));
              return t => {
                var n, i;
                return (0, r.jsx)(e, (n = function(e) {
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
                }({}, t), i = i = {
                  onDelete: async () => {
                    await t.onClose()
                  }
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(i)).forEach(function(e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                }), n))
              }
            })
          }
        })
      })}><c.h21><div className={m.invitesContainer}>{C.length > 0 && <r.Fragment>{<O title={g.intl.string(g.t.yflAJS)} />}{<r.Fragment>{C.map(e => (0, r.jsx)(f.Z, {
                invite: e,
                expired: false
              }, e.invite_id))}</r.Fragment>}</r.Fragment>}{v.length > 0 && <r.Fragment>{<O title={g.intl.string(g.t.f0Ia4e)} />}{<r.Fragment>{v.map(e => (0, r.jsx)(f.Z, {
                invite: e,
                expired: true
              }, e.invite_id))}</r.Fragment>}</r.Fragment>}</div></c.h21></c.y5t></div>
}

function O(e) {
  let {
    title: t
  } = e;
  return <div className={m.headerContainer}>{<c.Text className={m.headerTitle} variant={"text-xs/semibold"} color={"interactive-normal"}>{t}</c.Text>}{<div className={m.headerDivider} />}</div>
}