/** Chunk was on 3291 **/
/** chunk id: 24722, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk98678 = require("./98678.js");

function h(e) {
  let {
    transitionState: t,
    onClose: r,
    roleId: h,
    guildId: y
  } = e, k = (0, l.e7)([w.Z], () => w.Z.getRole(h), [h]), [T, C] = n.useState(""), [M, v] = n.useState({}), [E, Z] = n.useState(false), [S, H] = n.useState(null), B = n.useRef(null);
  n.useEffect(() => {
    d.Z.requestMembers(y, T.trim().toLowerCase(), x._4)
  }, [y, T]);
  let L = n.useCallback(e => !e.roles.includes(h), [h]),
    O = (0, x.lJ)(y, L),
    j = n.useMemo(() => O.filter(e => (0, x.eg)(T, e)), [T, O]),
    P = n.useCallback(async () => {
      let e = Object.values(M).map(e => e.row.id);
      Z(true);
      try {
        await g.Z.bulkAddMemberRoles(y, h, e), (0, m.H)(y, h, false), r()
      } catch (t) {
        let e = new c.Hx(t);
        Z(false), H(e)
      }
    }, [y, h, M, r]),
    A = n.useMemo(() => j.map(e => {
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
    N = u.Z.useSections({
      members: A
    }),
    U = n.useCallback(e => e.rowType === f.aC.MEMBER || e.rowType === f.aC.OWNER ? {
      type: s.F.MEMBER,
      label: e.name,
      avatar: e.avatarURL
    } : null, []),
    q = n.useMemo(() => Object.keys(M).length, [M]);
  return (0, a.jsx)(u.Z.Provider, {
    listRef: B,
    query: T,
    setQuery: C,
    pendingAdditions: M,
    setPendingAdditions: v,
    members: A,
    getRichTag: U,
    maxPendingRows: _.ey,
    children: (0, a.jsx)(i.Modal, {
      onClose: r,
      transitionState: t,
      title: p.intl.string(p.t["ZYOK4+"]),
      subtitle: null != k ? p.intl.format(p.t["qP+nub"], {
        numMembers: _.ey,
        roleName: k.name
      }) : p.intl.format(p.t["3OxP4u"], {
        numMembers: _.ey
      }),
      input: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(u.Z.SearchBox, {
          placeholderText: p.intl.string(p.t.vMiCaW)
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
        sections: N
      },
      actions: [{
        text: p.intl.string(p.t["ETE/oK"]),
        variant: "secondary",
        onClick: r
      }, {
        text: p.intl.string(p.t.OYkgVl),
        variant: "primary",
        onClick: P,
        loading: E,
        disabled: 0 === q || q > _.ey
      }]
    })
  })
}