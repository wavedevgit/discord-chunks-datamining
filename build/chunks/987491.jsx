/** Chunk was on 9924 **/
/** chunk id: 987491, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk693546 = require("./693546.js"),
  Chunk826581 = require("./826581.js"),
  Chunk246364 = require("./246364.js"),
  Chunk98493 = require("./98493.js"),
  Chunk328977 = require("./328977.js"),
  Chunk412222 = require("./412222.js"),
  Chunk223312 = require("./223312.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk768762 = require("./768762.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk598077 = require("./598077.js"),
  Chunk430824 = require("./430824.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk555405 = require("./555405.js"),
  Chunk710931 = require("./710931.js"),
  Chunk771429 = require("./771429.js"),
  Chunk350381 = require("./350381.js");

function y(e) {
  let t, n, {
    status: r
  } = e;
  switch (r) {
    case b.wB.REJECTED:
      t = P.t["7YSJ6e"], n = P.t.i05OUV;
      break;
    case b.wB.APPROVED:
      t = P.t.bv82GR, n = P.t.D4OUHR;
      break;
    default:
      t = P.t["/wqiSk"], n = P.t.o47YZm
  }
  return <div className={R.emptyContainer}>{<d.dz2 size={"md"} color={"currentColor"} className={R.checkmark} />}{<d.X6q variant={"heading-md/medium"}>{P.intl.string(t)}</d.X6q>}{<d.Text color={"text-muted"} variant={"text-sm/medium"}>{P.intl.string(n)}</d.Text>}</div>
}

function M(e) {
  let {
    sortOrder: t,
    onSortChange: n
  } = e;
  return <thead><tr className={Z.tableHeaderRow}>{<th className={R.headerCell}><d.Text variant={"eyebrow"} color={"interactive-normal"}>{P.intl.string(P.t.Es7n9f)}</d.Text></th>}{<th className={i()(R.headerCell, w.mediumCol)}><d.P3F className={R.sortItem} onClick={n}>{<d.Text variant={"eyebrow"} color={"interactive-normal"}>{P.intl.string(P.t.EZ5QWF)}</d.Text>}{t === b.Nw.TIMESTAMP_ASC ? <_.Z className={R.sortIcon} direction={_.Z.Directions.UP} /> : <_.Z className={R.sortIcon} direction={_.Z.Directions.DOWN} />}</d.P3F></th>}{<th className={i()(R.headerCell, R.moreOptionsCol)}><d.Text variant={"eyebrow"} color={"interactive-normal"}>{P.intl.string(P.t["5Q9xGh"])}</d.Text></th>}</tr></thead>
}
let O = Chunk73800.memo(function(e) {
    let {
      joinRequest: t,
      user: n
    } = e, {
      joinRequestId: a,
      guildId: i
    } = t, {
      analyticsLocations: s
    } = (0, x.ZP)(), o = r.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), (0, T.openUserProfileModal)({
        userId: n.id,
        joinRequestId: a,
        sourceAnalyticsLocations: s
      })
    }, [n, a, s]);
    return <div className={w.memberNameContainer}>{<d.P3F className={w.memberAvatar} onClick={o}><m.Z user={n} /></d.P3F>}{<div className={w.memberName}><d.Text variant={"text-sm/medium"}><d.P3F onClick={o} className={w.nameContainer}>{n.globalName}{<C.ZP primaryGuild={null == n ? true : n.primaryGuild} userId={null == n ? true : n.id} contextGuildId={i} containerClassName={w.memberClanTag} />}</d.P3F></d.Text></div>}{<div className={w.memberGlobalName}><d.Text variant={"text-xs/normal"} color={"header-secondary"} tag={"span"}><d.P3F onClick={o} tag={"span"}>{S.ZP.getUserTag(n)}</d.P3F></d.Text></div>}</div>
  }),
  A = Chunk73800.memo(function(e) {
    let {
      joinRequest: t,
      onSelect: a
    } = e, {
      guildId: s,
      createdAt: m,
      applicationStatus: x
    } = t, h = r.useMemo(() => new E.Z(t.user), [t.user]), j = (0, p.L)({
      guildId: s
    }), f = (0, c.e7)([N.Z], () => N.Z.getGuild(s)), v = x === b.wB.SUBMITTED, g = e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await n.e("84259").then(n.bind(n, 597409));
        return t => {
          var n, r;
          return <e{...n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({}, t), r = r = {
            guild: f,
            user: h
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n} />
        }
      }, {
        position: "bottom",
        align: "right"
      })
    };
    return null == h ? null : <tr onClick={a} className={i()(w.roundedRow, w.memberRowContainer, {
        [w.selected]: (null == j ? true : j.joinRequestId) === t.joinRequestId
      })}>{<td><O joinRequest={t} user={h} /></td>}{<td className={w.mediumCol}><d.Text variant={"text-sm/normal"} color={"header-secondary"}>{o()(m).format("lll")}</d.Text></td>}{<td className={R.moreOptionsCol}>{v && (0, l.jsx)(d.ua7, {
          text: P.intl.string(P.t.x8Nn4O),
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: n
            } = e;
            return (0, l.jsx)(d.P3F, {
              onMouseEnter: t,
              onMouseLeave: n,
              onClick: g,
              className: w.button,
              children: (0, l.jsx)(d.Huf, {
                size: "custom",
                color: "currentColor",
                width: 18,
                height: 18
              })
            })
          }
        })}</td>}</tr>
  }),
  k = () => {
    let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
      t = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
      n = "".concat(Math.floor(25 * Math.random()) + 50, "px");
    return <tr className={i()(Chunk350381.roundedRow, Chunk350381.memberRowContainer)}>{<td><div className={Chunk350381.memberNameContainer}>{<div className={i()(Chunk555405.placeholderAvatar, Chunk350381.memberAvatar)} />}{<div className={Chunk350381.memberName}><div className={Chunk555405.placeholderText} style={{
                width: module
              }} /></div>}{<div className={Chunk350381.memberGlobalName}><div className={Chunk555405.placeholderTextSmall} style={{
                width: exports
              }} /></div>}</div></td>}{<td className={Chunk350381.mediumCol}><div className={Chunk555405.placeholderText} style={{
            width: require
          }} /></td>}{<td className={Chunk555405.moreOptionsCol} />}</tr>
  };

function B(e) {
  let {
    guildId: t,
    currentTab: n
  } = e, a = r.useRef(null), i = (0, c.e7)([N.Z], () => N.Z.getGuild(t)), s = (0, v.C)({
    guildId: t
  }), o = (0, c.e7)([j.Z], () => j.Z.isFetching()), {
    guildJoinRequests: u
  } = (0, g.j)({
    guildId: t,
    applicationStatus: n,
    sortOrder: s
  }), {
    fetchNextPage: m
  } = (0, f.m)({
    guildId: t,
    guildJoinRequests: u
  }), x = r.useCallback(async () => {
    let e = s === b.Nw.TIMESTAMP_ASC ? b.Nw.TIMESTAMP_DESC : b.Nw.TIMESTAMP_ASC;
    h.Z.setSelectedSortOrder(t, e), await m(e, n)
  }, [s, t, m, n]);
  return null == i ? null : <div className={I.mainTableContainer}><d.Den className={I.horizatonalScroller} ref={a} orientation={"horizontal"}><table className={R.table}>{<M sortOrder={s} onSortChange={x} />}{<tbody>{o ? [, , , , , ].fill(0).map((e, t) => (0, l.jsx)(k, {}, "placeholder-".concat(t))) : 0 === u.length ? (0, l.jsx)("td", {
            colSpan: 3,
            children: (0, l.jsx)(y, {
              status: n
            })
          }) : u.map(e => (0, l.jsx)(A, {
            joinRequest: e,
            onSelect: () => h.Z.setSelectedGuildJoinRequest(t, e)
          }, e.joinRequestId))}</tbody>}</table></d.Den></div>
}