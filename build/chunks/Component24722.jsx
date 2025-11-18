/** Chunk was on 68226 **/
/** chunk id: 24722, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk881052 = require("./881052.js"),
  Chunk974339 = require("./974339.jsx"),
  Chunk892880 = require("./892880.js"),
  Chunk51144 = require("./51144.js"),
  Chunk480608 = require("./480608.js"),
  Chunk434404 = require("./434404.js"),
  Chunk103576 = require("./103576.js"),
  Chunk130341 = require("./130341.js"),
  Chunk494831 = require("./494831.js"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk657966 = require("./657966.js");

function h(e) {
  let {
    transitionState: t,
    onClose: r,
    roleId: h,
    guildId: k
  } = e, y = (0, l.e7)([w.Z], () => w.Z.getRole(h), [h]), [T, C] = n.useState(""), [M, v] = n.useState({}), [E, Z] = n.useState(false), [S, H] = n.useState(null), B = n.useRef(null);
  n.useEffect(() => {
    d.Z.requestMembers(k, T.trim().toLowerCase(), x._4)
  }, [k, T]);
  let L = n.useCallback(e => !e.roles.includes(h), [h]),
    O = (0, x.lJ)(k, L),
    j = n.useMemo(() => O.filter(e => (0, x.eg)(T, e)), [T, O]),
    P = n.useCallback(async () => {
      let e = Object.values(M).map(e => e.row.id);
      Z(true);
      try {
        await g.Z.bulkAddMemberRoles(k, h, e), (0, m.H)(k, h, false), r()
      } catch (t) {
        let e = new c.Hx(t);
        Z(false), H(e)
      }
    }, [k, h, M, r]),
    q = n.useMemo(() => j.map(e => {
      var t;
      let r = b.ZP.getUserTag(e.user);
      return {
        rowType: f.aC.MEMBER,
        name: null != (t = e.name) ? t : r,
        nickname: e.name,
        username: r,
        id: e.id,
        avatarURL: e.avatarURL,
        bot: e.bot,
        verifiedBot: e.verifiedBot,
        disabled: false,
        key: e.id
      }
    }), [j]),
    A = u.Z.useSections({
      members: q
    }),
    N = n.useCallback(e => e.rowType === f.aC.MEMBER || e.rowType === f.aC.OWNER ? {
      type: s.F.MEMBER,
      label: e.name,
      avatar: e.avatarURL
    } : null, []),
    U = n.useMemo(() => Object.keys(M).length, [M]);
  return (0, a.jsx)(u.Z.Provider, {
    listRef: B,
    query: T,
    setQuery: C,
    pendingAdditions: M,
    setPendingAdditions: v,
    members: q,
    getRichTag: N,
    maxPendingRows: _.ey,
    children: (0, a.jsx)(i.Modal, {
      onClose: r,
      transitionState: t,
      title: p.intl.string(p.t.ZYOK46),
      subtitle: null != y ? p.intl.format(p.t["qP+nuZ"], {
        numMembers: _.ey,
        roleName: y.name
      }) : p.intl.format(p.t["3OxP4q"], {
        numMembers: _.ey
      }),
      input: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(u.Z.SearchBox, {
          placeholderText: p.intl.string(p.t.vMiCaQ)
        }), null != S ? (0, a.jsx)(o.Text, {
          className: R.errorText,
          variant: "text-xs/normal",
          color: "text-danger",
          children: S.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: B,
        sectionHeight: u.Z.SECTION_HEIGHT,
        renderSection: u.Z.renderSection,
        rowHeight: u.Z.ROW_HEIGHT,
        renderRow: u.Z.renderRow,
        sections: A
      },
      actions: [{
        text: p.intl.string(p.t["ETE/oC"]),
        variant: "secondary",
        onClick: r
      }, {
        text: p.intl.string(p.t.OYkgVk),
        variant: "primary",
        onClick: P,
        loading: E,
        disabled: 0 === U || U > _.ey
      }]
    })
  })
}