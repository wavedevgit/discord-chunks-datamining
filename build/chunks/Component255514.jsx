/** Chunk was on 54844 **/
/** chunk id: 255514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk741086 = require("./741086.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk277537 = require("./277537.js"),
  Chunk631885 = require("./631885.js"),
  Chunk981312 = require("./981312.js"),
  Chunk155647 = require("./155647.js"),
  Chunk185625 = require("./185625.js"),
  Chunk273389 = require("./273389.jsx"),
  Chunk778231 = require("./778231.jsx"),
  Chunk816342 = require("./816342.jsx"),
  Chunk15667 = require("./15667.jsx"),
  Chunk76264 = require("./76264.jsx"),
  Chunk805746 = require("./805746.jsx"),
  Chunk822686 = require("./822686.jsx"),
  Chunk356110 = require("./356110.jsx"),
  Chunk730719 = require("./730719.jsx"),
  Chunk996701 = require("./996701.jsx"),
  Chunk238122 = require("./238122.jsx"),
  Chunk273514 = require("./273514.jsx"),
  Chunk995712 = require("./995712.jsx"),
  Chunk763431 = require("./763431.jsx"),
  Chunk234937 = require("./234937.jsx"),
  Chunk473121 = require("./473121.jsx"),
  Chunk497954 = require("./497954.jsx"),
  Chunk449413 = require("./449413.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk316617 = require("./316617.jsx"),
  Chunk15682 = require("./15682.jsx"),
  Chunk189472 = require("./189472.jsx"),
  Chunk749534 = require("./749534.jsx"),
  Chunk157759 = require("./157759.jsx"),
  Chunk521332 = require("./521332.jsx"),
  Chunk680050 = require("./680050.jsx"),
  Chunk905434 = require("./905434.jsx"),
  Chunk196627 = require("./196627.jsx"),
  Chunk289809 = require("./289809.jsx"),
  Chunk739319 = require("./739319.jsx"),
  Chunk842401 = require("./842401.jsx"),
  Chunk229916 = require("./229916.jsx"),
  Chunk375790 = require("./375790.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk43617 = require("./43617.js"),
  Chunk520310 = require("./520310.js");

function K(e) {
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
}
let q = ["user_urf", "message_urf", "guild_urf"];

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

function $(e, t) {
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
let ee = e => {
  let {
    node: t,
    reportType: n,
    reportSubType: ee,
    history: et,
    onSelectChild: en,
    onModalClose: er,
    onSubmit: ei,
    multiSelect: el,
    reportId: ea,
    textInput: es
  } = e, eo = X(t, "checkbox"), ec = X(t, "text_line_resource"), ed = $(t, "external_link"), eu = $(t, "free_text"), em = $(t, "dropdown"), ep = X(t, "text"), eg = l.s.REPORT_TO_MOD.has(n.name), [e_, eh] = i.useState(false), [eb, ex] = i.useState(false), [ef, ev] = i.useState(""), [ej, ey] = i.useState(() => ({})), [eO, eZ] = i.useState(() => ({})), eI = i.useMemo(() => "message" === n.name ? n.record.channel_id : true, [n]), eS = i.useCallback(e => ({
    nodeRef: t.id,
    destination: e,
    textInput: null != eu || null != em ? eO : true,
    multiSelect: null != eo ? {
      name: eo.name,
      state: ej
    } : true
  }), [t, eu, em, eo, ej, eO]), eC = i.useMemo(() => (0, m.VP)(eu, em, eo, eO, ej), [eu, em, eo, eO, ej]), eN = function(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = K({}, eO);
    r[e] = {
      value: t,
      isValid: n
    }, eZ(r)
  }, eT = e => {
    en(eS(e))
  };
  i.useEffect(() => {
    null != el && ey(el), null != es && eZ(es)
  }, [el, es]), i.useEffect(() => {
    if (null != eo) {
      let e = eo.data;
      if (null != e)
        for (let [t, n, r, i] of e) i && ey(e => (function(e, t) {
          return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e
        })(K({}, e), {
          [t]: n
        }))
    }
  }, [eo]), i.useEffect(() => {
    t.is_auto_submit && !eb && (ex(true), ei(eS(["", t.id])))
  }, [t.is_auto_submit, eb, ei, eS, t.id]);
  let eP = (0, u.fW)(ee),
    eE = null != X(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
    ek = (0, d.U)(),
    ew = (0, o.PO)("share_with_parent_element"),
    eM = (0, c.zu)(),
    eR = ek && eM.length > 0 && ew && null != X(t, "share_with_parents");
  return (0, r.jsxs)("div", {
    className: J.container,
    children: [(0, r.jsxs)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      direction: s.Z.Direction.VERTICAL,
      className: J.header,
      children: [(0, r.jsx)(L.Z, {
        element: X(t, "success")
      }), (0, r.jsx)(N.Z, {
        node: t,
        isModeratorReport: eg
      }), (0, r.jsx)(P.Z, {
        node: t
      })]
    }), (0, r.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: J.body,
      children: [null != ec && (0, r.jsx)(H.Z, {
        element: ec
      }), null != ep && (0, r.jsx)(G.Z, {
        element: ep
      }), null != X(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(k.Z, {
        message: n.record
      }), null != X(t, "user_preview") && "user" === n.name ? (0, r.jsx)(W.Z, {
        user: n.record
      }) : null, null != X(t, "widget_preview") && "widget" === n.name ? (0, r.jsx)(F.Z, {
        widget: n.widget,
        userId: n.user_id
      }) : null, null != X(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(S.Z, {
        guild: n.record
      }) : null, null != X(t, "breadcrumbs") && (0, r.jsx)(h.Z, {
        isModeratorReport: eg,
        history: et
      }), function(e) {
        let {
          elements: t
        } = e;
        return t.some(e => {
          let {
            type: t
          } = e;
          return z.O.includes(t)
        })
      }(t) && (0, r.jsxs)(R.Z, {
        children: [eE && (0, r.jsx)(T.Z, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: eI,
          reportId: ea
        }), eR && (0, r.jsx)(B.Z, {
          parents: eM
        }), null != X(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name || "application" === n.name && null != n.record.bot) && (0, r.jsx)(_.Z, {
          user: "application" === n.name ? n.record.bot : "user" === n.name ? n.record : n.record.author,
          channelId: eI,
          reportId: ea,
          reportType: n
        }), !eE && null != X(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(M.Z, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: eI,
          reportId: ea
        }), null != X(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(f.Z, {
          message: n.record,
          reportId: ea
        }), null != X(t, "leave_guild") && "guild" === n.name && (0, r.jsx)(E.Z, {
          guildId: n.record.id,
          reportId: ea
        }), null != X(t, "deauthorize_app") && "application" === n.name && (0, r.jsx)(x.Z, {
          application: n.record,
          reportId: ea
        }), null != X(t, "deauthorize_app") && "application" === n.name && (0, r.jsx)(D.Z, {
          application: n.record,
          reportId: ea
        })]
      }), null != X(t, "settings_upsells") && ("message" === n.name || "report_to_mod_message" === n.name) && null != eP && (0, r.jsx)(A.Z, {
        settingsUpsells: eP,
        channelId: n.record.channel_id,
        onModalClose: er,
        reportId: ea,
        reportType: n,
        reportSubType: ee
      }), null != X(t, "channel_preview") && "stage_channel" === n.name && (0, r.jsx)(U.Z, {
        stageInstance: n.record
      }), null != X(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, r.jsx)(C.Z, {
        event: n.record
      }), null != X(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, r.jsx)(Z.Z, {
        entry: n.record
      }), null != X(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, r.jsx)(I.Z, {
        entry: n.record
      }), null != X(t, "app_preview") && "application" === n.name && (0, r.jsx)(g.Z, {
        entry: n.record
      }), null != eo && (0, r.jsx)(w.Z, {
        element: eo,
        onChange: (e, t) => {
          let n = K({}, ej);
          e in ej ? delete n[e] : n[e] = t, ey(n)
        },
        state: ej
      }), q.includes(n.name) && null != em && em.length > 0 && (0, r.jsx)(v.Z, {
        elements: em,
        onChange: eN,
        state: eO
      }), q.includes(n.name) && null != eu && eu.length > 0 && (0, r.jsx)(O.Z, {
        elements: eu,
        onChange: eN,
        state: eO
      }), (0, r.jsxs)("div", {
        className: J.listContainer,
        children: [(0, r.jsx)(b.Z, {
          node: t,
          onSelectChild: eT,
          nodeMap: e.nodeMap
        }), null != ed && ed.length > 0 ? (0, r.jsx)(y.Z, {
          elements: ed
        }) : null]
      }), (0, r.jsx)(j.Z, {
        errorMessage: ef,
        onClose: () => {
          ev("")
        }
      })]
    }), (0, r.jsx)(p.Z, {
      button: t.button,
      submitting: e_,
      disableNext: eC,
      isModeratorReport: eg,
      onClick: t => {
        switch (t.type) {
          case "done":
          case "cancel":
            er();
            break;
          case "next":
            eT(["", t.target]);
            break;
          case "submit":
            eh(true);
            let n = ["", e.successNodeId];
            ei(eS(n)).then(() => {
              ev(""), eT(n)
            }).catch(e => {
              var t;
              (null == (t = e.body) ? true : t.code) === V.evJ.INVALID_FORM_BODY ? ev(Q.intl.string(Q.t.VjAAuP)) : eg ? ev(Q.intl.string(Y.default.psKFdJ)) : ev(Q.intl.string(Q.t.h6D8Vy))
            }).finally(() => {
              eh(false)
            })
        }
      },
      onBackClicked: e.onNavigateBack,
      canNavigateBack: et.length > 0
    }), (0, r.jsx)(a.olH, {
      "data-migration-pending": true,
      className: J.closeButton,
      onClick: er
    })]
  })
}