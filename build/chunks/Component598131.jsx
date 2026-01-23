/** Chunk was on 58652 **/
/** chunk id: 598131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => et
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk2110 = require("./2110.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk834981 = require("./834981.js"),
  Chunk840387 = require("./840387.js"),
  Chunk319582 = require("./319582.js"),
  Chunk17372 = require("./17372.js"),
  Chunk369053 = require("./369053.js"),
  Chunk482578 = require("./482578.jsx"),
  Chunk248492 = require("./248492.jsx"),
  Chunk133134 = require("./133134.jsx"),
  Chunk374966 = require("./374966.jsx"),
  Chunk803957 = require("./803957.jsx"),
  Chunk905074 = require("./905074.jsx"),
  Chunk80718 = require("./80718.jsx"),
  Chunk676978 = require("./676978.jsx"),
  Chunk657679 = require("./657679.jsx"),
  Chunk932482 = require("./932482.jsx"),
  Chunk404192 = require("./404192.jsx"),
  Chunk608523 = require("./608523.jsx"),
  Chunk717612 = require("./717612.jsx"),
  Chunk748113 = require("./748113.jsx"),
  Chunk458739 = require("./458739.jsx"),
  Chunk325272 = require("./325272.jsx"),
  Chunk688927 = require("./688927.jsx"),
  Chunk796071 = require("./796071.jsx"),
  Chunk132318 = require("./132318.jsx"),
  Chunk117056 = require("./117056.jsx"),
  Chunk66535 = require("./66535.jsx"),
  Chunk12613 = require("./12613.jsx"),
  Chunk842012 = require("./842012.jsx"),
  Chunk588684 = require("./588684.jsx"),
  Chunk316862 = require("./316862.jsx"),
  Chunk563218 = require("./563218.jsx"),
  Chunk617071 = require("./617071.jsx"),
  Chunk883471 = require("./883471.jsx"),
  Chunk943071 = require("./943071.jsx"),
  Chunk216033 = require("./216033.jsx"),
  Chunk908675 = require("./908675.jsx"),
  Chunk503985 = require("./503985.jsx"),
  Chunk145996 = require("./145996.jsx"),
  Chunk964448 = require("./964448.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk212335 = require("./212335.js");

function J(e) {
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
}
let Z = ["user_urf", "message_urf", "guild_urf", "media_takedown"];

function X(e, t) {
  let {
    elements: n
  } = e;
  return n.find(e => {
    let {
      type: n
    } = e;
    return n === t
  })
}

function ee(e, t) {
  let {
    elements: n
  } = e;
  return n.filter(e => {
    let {
      type: n
    } = e;
    return n === t
  })
}
let et = e => {
  let {
    node: t,
    reportType: n,
    reportSubType: et,
    history: en,
    onSelectChild: el,
    onModalClose: er,
    onSubmit: ei,
    multiSelect: ea,
    reportId: es,
    textInput: eo
  } = e, ed = X(t, "checkbox"), ec = X(t, "text_line_resource"), eu = ee(t, "external_link"), em = ee(t, "free_text"), ep = ee(t, "dropdown"), eb = X(t, "text"), ex = X(t, "content_url_input"), eg = i.x.REPORT_TO_MOD.has(n.name), [e_, eh] = r.useState(false), [ev, ef] = r.useState(false), [ej, eA] = r.useState(""), [ey, eO] = r.useState(() => ({})), [eS, eT] = r.useState(() => ({})), eN = r.useMemo(() => "message" === n.name ? n.record.channel_id : true, [n]), ek = r.useCallback(e => ({
    nodeRef: t.id,
    destination: e,
    textInput: null != em || null != ep || null != ex ? eS : true,
    multiSelect: null != ed ? {
      name: ed.name,
      state: ey
    } : true
  }), [t, em, ep, ex, ed, ey, eS]), ew = r.useMemo(() => (0, m.ks)({
    freeTextElements: em,
    dropdownElements: ep,
    multiSelectElement: ed,
    contentUrlInputElement: ex
  }, {
    textInput: eS,
    multiSelect: ey
  }), [em, ep, ed, ex, eS, ey]), eC = r.useCallback((e, t) => {
    let n = J({}, ey);
    e in ey ? delete n[e] : n[e] = t, eO(n)
  }, [ey]), eP = r.useCallback(function(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      l = arguments.length > 3 ? arguments[3] : true,
      r = arguments.length > 4 ? arguments[4] : true,
      i = J({}, eS);
    i[e] = {
      value: t,
      isValid: n
    }, null != l && (null != r && "" !== r ? i[l] = {
      value: r,
      isValid: n
    } : delete i[l]), eT(i)
  }, [eS]), eI = r.useCallback(e => {
    el(ek(e))
  }, [el, ek]);
  r.useEffect(() => {
    null != ea && eO(ea), null != eo && eT(eo)
  }, [ea, eo]), r.useEffect(() => {
    if (null != ed) {
      let e = ed.data;
      if (null != e)
        for (let [t, n, l, r] of e) r && eO(e => (function(e, t) {
          return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e
        })(J({}, e), {
          [t]: n
        }))
    }
  }, [ed]);
  let eE = r.useCallback(e => {
      e === Q.t02.INVALID_FORM_BODY ? eA(Y.intl.string(Y.t.VjAAuP)) : eg ? eA(Y.intl.string($.default.psKFdJ)) : eA(Y.intl.string(Y.t.h6D8Vy))
    }, [eg]),
    eD = r.useCallback(() => {
      let t = ["", e.successNodeId];
      ei(ek(t)).then(() => {
        eA(""), eI(t)
      }).catch(e => {
        var t;
        eE(null == (t = e.body) ? true : t.code)
      }).finally(() => {
        eh(false)
      })
    }, [e.successNodeId, ek, ei, eI, eE]),
    eM = r.useCallback(e => {
      switch (e.type) {
        case "done":
        case "cancel":
          er();
          break;
        case "next":
          eI(["", e.target]);
          break;
        case "submit":
          eh(true), eD()
      }
    }, [er, eI, eD]),
    eR = r.useCallback(e => {
      "Enter" !== e.key || ew || e_ || null == t.button || (e.preventDefault(), eM(t.button))
    }, [ew, e_, t.button, eM]);
  r.useEffect(() => {
    t.is_auto_submit && !ev && (ef(true), ei(ek(["", t.id])))
  }, [t.is_auto_submit, ev, ei, ek, t.id]);
  let eL = (0, c.fY)(et),
    eG = null != X(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
    eB = (0, d.Z)(),
    eU = (0, o.GR)(),
    eH = eB && eU.length > 0 && null != X(t, "share_with_parents"),
    eV = n.name === u.tY.MEDIA_TAKEDOWN;
  return (0, l.jsxs)("div", {
    className: q.kL,
    onKeyDown: eR,
    children: [(0, l.jsxs)(a.rQ0, {
      "data-migration-pending": true,
      separator: false,
      direction: s.A.Direction.VERTICAL,
      className: q.wx,
      children: [(0, l.jsx)(H.A, {
        element: X(t, "success")
      }), (0, l.jsx)(w.A, {
        node: t,
        isModeratorReport: eg,
        isTidaReport: eV
      }), (0, l.jsx)(P.A, {
        node: t
      })]
    }), (0, l.jsxs)(a.$mQ, {
      "data-migration-pending": true,
      className: q.rf,
      children: [null != ec && (0, l.jsx)(F.A, {
        element: ec
      }), null != eb && (0, l.jsx)(V.A, {
        element: eb
      }), null != X(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(E.A, {
        message: n.record
      }), null != X(t, "user_preview") && "user" === n.name ? (0, l.jsx)(W.A, {
        user: n.record
      }) : null, null != X(t, "widget_preview") && "widget" === n.name ? (0, l.jsx)(z.A, {
        widget: n.widget,
        userId: n.user_id
      }) : null, null != X(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(N.A, {
        guild: n.record
      }) : null, null != X(t, "breadcrumbs") && (0, l.jsx)(g.A, {
        isModeratorReport: eg,
        history: en
      }), function(e) {
        let {
          elements: t
        } = e;
        return t.some(e => {
          let {
            type: t
          } = e;
          return K.T.includes(t)
        })
      }(t) && (0, l.jsxs)(R.A, {
        children: [eG && (0, l.jsx)(C.A, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: eN,
          reportId: es
        }), eH && (0, l.jsx)(B.A, {
          parents: eU
        }), null != X(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name || "application" === n.name && null != n.record.bot) && (0, l.jsx)(x.A, {
          user: "application" === n.name ? n.record.bot : "user" === n.name ? n.record : n.record.author,
          channelId: eN,
          reportId: es,
          reportType: n
        }), !eG && null != X(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(M.A, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: eN,
          reportId: es
        }), null != X(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, l.jsx)(f.A, {
          message: n.record,
          reportId: es
        }), null != X(t, "leave_guild") && "guild" === n.name && (0, l.jsx)(I.A, {
          guildId: n.record.id,
          reportId: es
        }), null != X(t, "deauthorize_app") && "application" === n.name && (0, l.jsx)(v.A, {
          application: n.record,
          reportId: es
        }), null != X(t, "deauthorize_app") && "application" === n.name && (0, l.jsx)(L.A, {
          application: n.record,
          reportId: es
        })]
      }), null != X(t, "settings_upsells") && ("message" === n.name || "report_to_mod_message" === n.name) && null != eL && (0, l.jsx)(G.A, {
        settingsUpsells: eL,
        channelId: n.record.channel_id,
        onModalClose: er,
        reportId: es,
        reportType: n,
        reportSubType: et
      }), null != X(t, "channel_preview") && "stage_channel" === n.name && (0, l.jsx)(U.A, {
        stageInstance: n.record
      }), null != X(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, l.jsx)(k.A, {
        event: n.record
      }), null != X(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, l.jsx)(S.A, {
        entry: n.record
      }), null != X(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, l.jsx)(T.A, {
        entry: n.record
      }), null != X(t, "app_preview") && "application" === n.name && (0, l.jsx)(b.A, {
        entry: n.record
      }), null != ed && (0, l.jsx)(D.A, {
        element: ed,
        onChange: eC,
        state: ey
      }), Z.includes(n.name) && null != ex && (0, l.jsx)(h.A, {
        element: ex,
        onChange: eP,
        state: eS
      }), Z.includes(n.name) && null != ep && ep.length > 0 && (0, l.jsx)(j.A, {
        elements: ep,
        onChange: eP,
        state: eS
      }), Z.includes(n.name) && null != em && em.length > 0 && (0, l.jsx)(O.A, {
        elements: em,
        onChange: eP,
        state: eS
      }), (null != t.children && t.children.length > 0 || null != eu && eu.length > 0) && (0, l.jsxs)("div", {
        className: q.qI,
        children: [(0, l.jsx)(_.A, {
          node: t,
          onSelectChild: eI,
          nodeMap: e.nodeMap
        }), null != eu && eu.length > 0 ? (0, l.jsx)(y.A, {
          elements: eu
        }) : null]
      }), (0, l.jsx)(A.A, {
        errorMessage: ej,
        onClose: () => {
          eA("")
        }
      })]
    }), (0, l.jsx)(p.A, {
      button: t.button,
      submitting: e_,
      disableNext: ew,
      isModeratorReport: eg,
      onClick: eM,
      onBackClicked: e.onNavigateBack,
      canNavigateBack: en.length > 0
    }), (0, l.jsx)(a.s_y, {
      "data-migration-pending": true,
      className: q.b,
      onClick: er
    })]
  })
}