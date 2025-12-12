/** Chunk was on 65165 **/
/** chunk id: 24722, original params: e,t,a (module,exports,require) **/
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
  Chunk379291 = require("./379291.js");

function h(e) {
  let {
    transitionState: t,
    onClose: a,
    roleId: h,
    guildId: y
  } = e, T = (0, l.e7)([w.Z], () => w.Z.getRole(h), [h]), [C, M] = n.useState(""), [v, _] = n.useState({}), [E, Z] = n.useState(false), [S, H] = n.useState(null), B = n.useRef(null);
  n.useEffect(() => {
    u.Z.requestMembers(y, C.trim().toLowerCase(), x._4)
  }, [y, C]);
  let L = n.useCallback(e => !e.roles.includes(h), [h]),
    O = (0, x.lJ)(y, L),
    j = n.useMemo(() => O.filter(e => (0, x.eg)(C, e)), [C, O]),
    P = n.useCallback(async () => {
      let e = Object.values(v).map(e => e.row.id);
      Z(true);
      try {
        await m.Z.bulkAddMemberRoles(y, h, e), (0, b.H)(y, h, false), a()
      } catch (t) {
        let e = new c.Hx(t);
        Z(false), H(e)
      }
    }, [y, h, v, a]),
    q = n.useMemo(() => j.map(e => {
      var t;
      let a = f.ZP.getUserTag(e.user);
      return {
        rowType: k.aC.MEMBER,
        name: null != (t = e.name) ? t : a,
        nickname: e.name,
        username: a,
        id: e.id,
        avatarURL: e.avatarURL,
        bot: e.bot,
        verifiedBot: e.verifiedBot,
        disabled: false,
        key: e.id
      }
    }), [j]),
    A = d.Z.useSections({
      members: q
    }),
    N = n.useCallback(e => e.rowType === k.aC.MEMBER || e.rowType === k.aC.OWNER ? {
      type: s.F.MEMBER,
      label: e.name,
      avatar: e.avatarURL
    } : null, []),
    U = n.useMemo(() => Object.keys(v).length, [v]);
  return (0, r.jsx)(d.Z.Provider, {
    listRef: B,
    query: C,
    setQuery: M,
    pendingAdditions: v,
    setPendingAdditions: _,
    members: q,
    getRichTag: N,
    maxPendingRows: g.ey,
    children: (0, r.jsx)(i.Modal, {
      onClose: a,
      transitionState: t,
      title: p.intl.string(p.t.ZYOK46),
      subtitle: null != T ? p.intl.format(p.t["qP+nuZ"], {
        numMembers: g.ey,
        roleName: T.name
      }) : p.intl.format(p.t["3OxP4q"], {
        numMembers: g.ey
      }),
      input: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(d.Z.SearchBox, {
          placeholderText: p.intl.string(p.t.vMiCaQ)
        }), null != S ? (0, r.jsx)(o.Text, {
          className: R.errorText,
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: S.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: B,
        sectionHeight: d.Z.SECTION_HEIGHT,
        renderSection: d.Z.renderSection,
        rowHeight: d.Z.ROW_HEIGHT,
        renderRow: d.Z.renderRow,
        sections: A
      },
      actions: [{
        text: p.intl.string(p.t["ETE/oC"]),
        variant: "secondary",
        onClick: a
      }, {
        text: p.intl.string(p.t.OYkgVk),
        variant: "primary",
        onClick: P,
        loading: E,
        disabled: 0 === U || U > g.ey
      }]
    })
  })
}