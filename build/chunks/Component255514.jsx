/** Chunk was on 60151 **/
/** chunk id: 255514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => et
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
  Chunk292352 = require("./292352.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk304726 = require("./304726.js"),
  Chunk880637 = require("./880637.js");

function J(e) {
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
let Y = ["user_urf", "message_urf", "guild_urf"];

function $(e, t) {
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
    onSelectChild: er,
    onModalClose: ei,
    onSubmit: el,
    multiSelect: ea,
    reportId: eo,
    textInput: es
  } = e, ec = $(t, "checkbox"), ed = $(t, "text_line_resource"), eu = ee(t, "external_link"), e_ = ee(t, "free_text"), em = ee(t, "dropdown"), ep = $(t, "text"), eg = l.s.REPORT_TO_MOD.has(n.name), [ef, eb] = i.useState(false), [eh, ex] = i.useState(false), [ev, ej] = i.useState(""), [ey, eO] = i.useState(() => ({})), [eC, eI] = i.useState(() => ({})), eZ = i.useMemo(() => "message" === n.name ? n.record.channel_id : true, [n]), eS = i.useCallback(e => ({
    nodeRef: t.id,
    destination: e,
    textInput: null != e_ || null != em ? eC : true,
    multiSelect: null != ec ? {
      name: ec.name,
      state: ey
    } : true
  }), [t, e_, em, ec, ey, eC]), eT = i.useMemo(() => (0, _.VP)(e_, em, ec, eC, ey), [e_, em, ec, eC, ey]), eP = function(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = J({}, eC);
    r[e] = {
      value: t,
      isValid: n
    }, eI(r)
  }, eN = e => {
    er(eS(e))
  };
  i.useEffect(() => {
    null != ea && eO(ea), null != es && eI(es)
  }, [ea, es]), i.useEffect(() => {
    if (null != ec) {
      let e = ec.data;
      if (null != e)
        for (let [t, n, r, i] of e) i && eO(e => (function(e, t) {
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
        })(J({}, e), {
          [t]: n
        }))
    }
  }, [ec]), i.useEffect(() => {
    t.is_auto_submit && !eh && (ex(true), el(eS(["", t.id])))
  }, [t.is_auto_submit, eh, el, eS, t.id]);
  let eE = (0, u.fW)(et),
    ek = null != $(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
    ew = (0, d.U)(),
    eR = (0, s.PO)("share_with_parent_element"),
    eD = (0, c.mq)(X.ne.ACTIVE),
    eM = ew && eD.length > 0 && eR && null != $(t, "share_with_parents");
  return (0, r.jsxs)("div", {
    className: K.container,
    children: [(0, r.jsxs)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      direction: o.Z.Direction.VERTICAL,
      className: K.header,
      children: [(0, r.jsx)(U.Z, {
        element: $(t, "success")
      }), (0, r.jsx)(T.Z, {
        node: t,
        isModeratorReport: eg
      }), (0, r.jsx)(N.Z, {
        node: t
      })]
    }), (0, r.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: K.body,
      children: [null != ed && (0, r.jsx)(W.Z, {
        element: ed
      }), null != ep && (0, r.jsx)(G.Z, {
        element: ep
      }), null != $(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(k.Z, {
        message: n.record
      }), null != $(t, "user_preview") && "user" === n.name ? (0, r.jsx)(z.Z, {
        user: n.record
      }) : null, null != $(t, "widget_preview") && "widget" === n.name ? (0, r.jsx)(F.Z, {
        widget: n.widget,
        userId: n.user_id
      }) : null, null != $(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(Z.Z, {
        guild: n.record
      }) : null, null != $(t, "breadcrumbs") && (0, r.jsx)(f.Z, {
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
          return q.O.includes(t)
        })
      }(t) && (0, r.jsxs)(D.Z, {
        children: [ek && (0, r.jsx)(P.Z, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: eZ,
          reportId: eo
        }), eM && (0, r.jsx)(B.Z, {
          parents: eD
        }), null != $(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name || "application" === n.name && null != n.record.bot) && (0, r.jsx)(g.Z, {
          user: "application" === n.name ? n.record.bot : "user" === n.name ? n.record : n.record.author,
          channelId: eZ,
          reportId: eo,
          reportType: n
        }), !ek && null != $(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(R.Z, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: eZ,
          reportId: eo
        }), null != $(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(x.Z, {
          message: n.record,
          reportId: eo
        }), null != $(t, "leave_guild") && "guild" === n.name && (0, r.jsx)(E.Z, {
          guildId: n.record.id,
          reportId: eo
        }), null != $(t, "deauthorize_app") && "application" === n.name && (0, r.jsx)(h.Z, {
          application: n.record,
          reportId: eo
        }), null != $(t, "deauthorize_app") && "application" === n.name && (0, r.jsx)(M.Z, {
          application: n.record,
          reportId: eo
        })]
      }), null != $(t, "settings_upsells") && ("message" === n.name || "report_to_mod_message" === n.name) && null != eE && (0, r.jsx)(A.Z, {
        settingsUpsells: eE,
        channelId: n.record.channel_id,
        onModalClose: ei,
        reportId: eo,
        reportType: n,
        reportSubType: et
      }), null != $(t, "channel_preview") && "stage_channel" === n.name && (0, r.jsx)(L.Z, {
        stageInstance: n.record
      }), null != $(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, r.jsx)(S.Z, {
        event: n.record
      }), null != $(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, r.jsx)(C.Z, {
        entry: n.record
      }), null != $(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, r.jsx)(I.Z, {
        entry: n.record
      }), null != $(t, "app_preview") && "application" === n.name && (0, r.jsx)(p.Z, {
        entry: n.record
      }), null != ec && (0, r.jsx)(w.Z, {
        element: ec,
        onChange: (e, t) => {
          let n = J({}, ey);
          e in ey ? delete n[e] : n[e] = t, eO(n)
        },
        state: ey
      }), Y.includes(n.name) && null != em && em.length > 0 && (0, r.jsx)(v.Z, {
        elements: em,
        onChange: eP,
        state: eC
      }), Y.includes(n.name) && null != e_ && e_.length > 0 && (0, r.jsx)(O.Z, {
        elements: e_,
        onChange: eP,
        state: eC
      }), (0, r.jsxs)("div", {
        className: K.listContainer,
        children: [(0, r.jsx)(b.Z, {
          node: t,
          onSelectChild: eN,
          nodeMap: e.nodeMap
        }), null != eu && eu.length > 0 ? (0, r.jsx)(y.Z, {
          elements: eu
        }) : null]
      }), (0, r.jsx)(j.Z, {
        errorMessage: ev,
        onClose: () => {
          ej("")
        }
      })]
    }), (0, r.jsx)(m.Z, {
      button: t.button,
      submitting: ef,
      disableNext: eT,
      isModeratorReport: eg,
      onClick: t => {
        switch (t.type) {
          case "done":
          case "cancel":
            ei();
            break;
          case "next":
            eN(["", t.target]);
            break;
          case "submit":
            eb(true);
            let n = ["", e.successNodeId];
            el(eS(n)).then(() => {
              ej(""), eN(n)
            }).catch(e => {
              var t;
              (null == (t = e.body) ? true : t.code) === V.evJ.INVALID_FORM_BODY ? ej(H.intl.string(H.t.VjAAuL)) : eg ? ej(H.intl.string(Q.default.psKFdH)) : ej(H.intl.string(H.t.h6D8V1))
            }).finally(() => {
              eb(false)
            })
        }
      },
      onBackClicked: e.onNavigateBack,
      canNavigateBack: en.length > 0
    }), (0, r.jsx)(a.olH, {
      "data-migration-pending": true,
      className: K.closeButton,
      onClick: ei
    })]
  })
}