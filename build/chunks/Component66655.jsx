/** Chunk was on 51711 **/
/** chunk id: 66655, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk39255 = require("./39255.jsx"),
  Chunk198982 = require("./198982.js"),
  Chunk845202 = require("./845202.jsx"),
  Chunk695184 = require("./695184.js"),
  Chunk427262 = require("./427262.js"),
  Chunk545868 = require("./545868.js"),
  Chunk997509 = require("./997509.js"),
  Chunk396816 = require("./396816.js"),
  Chunk856644 = require("./856644.js"),
  Chunk512031 = require("./512031.js"),
  Chunk737045 = require("./737045.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk489715 = require("./489715.js");

function R(e) {
  let {
    transitionState: t,
    onClose: r,
    roleId: R,
    guildId: h
  } = e, A = (0, s.bG)([f.A], () => f.A.getRole(R), [R]), [T, v] = i.useState(""), [M, S] = i.useState({}), [y, E] = i.useState(false), [C, B] = i.useState(null), H = i.useRef(null);
  i.useEffect(() => {
    u.A.requestMembers(h, T.trim().toLowerCase(), g.uc)
  }, [h, T]);
  let O = i.useCallback(e => !e.roles.includes(R), [R]),
    j = (0, g.SB)(h, O),
    L = i.useMemo(() => j.filter(e => (0, g.EF)(T, e)), [T, j]),
    G = i.useCallback(async () => {
      let e = Object.values(M).map(e => e.row.id);
      E(true);
      try {
        await _.A.bulkAddMemberRoles(h, R, e), (0, b.a)(h, R, false), r()
      } catch (t) {
        let e = new c.LG(t);
        E(false), B(e)
      }
    }, [h, R, M, r]),
    P = i.useMemo(() => L.map(e => {
      var t;
      let r = m.Ay.getUserTag(e.user);
      return {
        rowType: w.T6.MEMBER,
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
    }), [L]),
    q = d.A.useSections({
      members: P
    }),
    N = i.useCallback(e => e.rowType === w.T6.MEMBER || e.rowType === w.T6.OWNER ? {
      type: o._.MEMBER,
      label: e.name,
      avatar: e.avatarURL
    } : null, []),
    U = i.useMemo(() => Object.keys(M).length, [M]);
  return (0, a.jsx)(d.A.Provider, {
    listRef: H,
    query: T,
    setQuery: v,
    pendingAdditions: M,
    setPendingAdditions: S,
    members: P,
    getRichTag: N,
    maxPendingRows: k.$S,
    children: (0, a.jsx)(n.Modal, {
      onClose: r,
      transitionState: t,
      title: x.intl.string(x.t.ZYOK46),
      subtitle: null != A ? x.intl.format(x.t["qP+nuZ"], {
        numMembers: k.$S,
        roleName: A.name
      }) : x.intl.format(x.t["3OxP4q"], {
        numMembers: k.$S
      }),
      input: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(d.A.SearchBox, {
          placeholderText: x.intl.string(x.t.vMiCaQ)
        }), null != C ? (0, a.jsx)(l.Text, {
          className: p.k,
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: C.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: H,
        sectionHeight: d.A.SECTION_HEIGHT,
        renderSection: d.A.renderSection,
        rowHeight: d.A.ROW_HEIGHT,
        renderRow: d.A.renderRow,
        sections: q
      },
      actions: [{
        text: x.intl.string(x.t["ETE/oC"]),
        variant: "secondary",
        onClick: r
      }, {
        text: x.intl.string(x.t.OYkgVk),
        variant: "primary",
        onClick: G,
        loading: y,
        disabled: 0 === U || U > k.$S
      }]
    })
  })
}