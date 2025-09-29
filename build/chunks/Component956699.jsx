/** Chunk was on web.js **/
/** chunk id: 956699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ey
}), require("./388685.js"), require("./35282.js"), require("./781311.js"), require("./49124.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk692547 = require("./692547.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk661111 = require("./661111.js"),
  Chunk179658 = require("./179658.js"),
  Chunk491428 = require("./491428.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk484614 = require("./484614.jsx"),
  Chunk386506 = require("./386506.js"),
  Chunk865427 = require("./865427.js"),
  Chunk802098 = require("./802098.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk482215 = require("./482215.jsx"),
  Chunk581612 = require("./581612.js"),
  Chunk580747 = require("./580747.js"),
  Chunk38618 = require("./38618.js"),
  Chunk375657 = require("./375657.js"),
  Chunk171393 = require("./171393.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk371651 = require("./371651.js"),
  Chunk398269 = require("./398269.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk857192 = require("./857192.js"),
  Chunk558724 = require("./558724.js"),
  Chunk808506 = require("./808506.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk998502 = require("./998502.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk306052 = require("./306052.jsx"),
  Chunk10298 = require("./10298.jsx"),
  Chunk526156 = require("./526156.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk908442 = require("./908442.js"),
  Chunk670873 = require("./670873.js"),
  Chunk504401 = require("./504401.js"),
  Chunk10198 = require("./10198.js");

function ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ee(e, t, n[t])
    })
  }
  return e
}

function en(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function er(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : en(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ei = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
  ea = [{
    value: "branch",
    label: "Branch Name"
  }, {
    value: "id",
    label: "Commit SHA"
  }];

function eo(e) {
  return "discord_ios" in e || "discord_android" in e
}
class es extends Chunk647438.Component {
  render() {
    let {
      project: e,
      overrideType: t,
      overrideId: n,
      disabled: i,
      error: a
    } = this.props, s = "branch" === exports ? "Branch Name" : "Commit SHA";
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      className: o()(Chunk670873.buildOverrideGroup, Chunk10198.marginBottom20, Chunk504401.card, Chunk670873.row),
      children: [(0, Chunk951288.jsx)(Chunk225433.Z, {
        className: o()(Chunk670873.removeBuildOverride, {
          [Chunk670873.removeBuildOverrideDisabled]: Chunk647438
        }),
        onClick: Chunk647438 ? true : this.handleRemoveBuildOverride
      }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk10198.marginBottom8,
        children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          basis: "50%",
          children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
            label: "Override Type",
            className: Chunk670873.item,
            options: ea,
            onChange: this.handleOverrideTypeChanged,
            value: exports,
            isDisabled: Chunk647438
          })
        }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          wrap: true,
          basis: "50%",
          children: (0, Chunk951288.jsx)(Chunk481060.oil, {
            label: Chunk392711,
            value: require,
            onChange: this.handleOverrideIdChanged,
            disabled: Chunk647438
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk600164.Z.Child, {
        children: [null != Chunk120356 && "" !== Chunk120356 && (0, Chunk951288.jsx)(Chunk481060.R94, {
          className: Chunk670873.item,
          style: {
            color: Chunk692547.Z.unsafe_rawColors.RED_400.css
          },
          type: Chunk481060.R94.Types.DESCRIPTION,
          children: Chunk120356
        }), (0, Chunk951288.jsxs)(Chunk481060.R94, {
          className: Chunk670873.item,
          type: Chunk481060.R94.Types.DESCRIPTION,
          children: ["This controls the build that will be served for the ", (0, Chunk951288.jsx)("code", {
            children: module
          }), " project."]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), ee(this, "handleRemoveBuildOverride", () => {
      this.props.onBuildOverrideRemoved(this.props.project)
    }), ee(this, "handleOverrideIdChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        id: e
      })
    }), ee(this, "handleOverrideTypeChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        type: e,
        id: ""
      })
    })
  }
}
class el extends Chunk647438.Component {
  async refreshBuildOverrides() {
    this.setState({
      loading: true
    });
    let e = await (0, Chunk865427.Ce)();
    this.setState({
      loading: false,
      buildOverrides: module,
      loadedBuildOverrides: l().cloneDeep(module),
      errors: {}
    })
  }
  isDirty() {
    let {
      buildOverrides: e,
      loadedBuildOverrides: t
    } = this.state;
    return !l().isEqual(module, exports)
  }
  componentDidMount() {
    this.refreshBuildOverrides()
  }
  getAvailableProjects() {
    let {
      buildOverrides: e
    } = this.state;
    if (null == module) return [];
    let t = Object.keys(module);
    return l().without(ei, ...exports)
  }
  renderEmpty() {
    return (0, Chunk951288.jsx)(Chunk481060.ubH, {
      theme: Chunk210887.Z.theme,
      className: o()(Chunk10198.marginTop40, Chunk10198.marginBottom20),
      children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
        children: "You have no build overrides configured."
      })
    })
  }
  renderItems() {
    let {
      buildOverrides: e,
      saving: t,
      errors: n
    } = this.state;
    return null == module ? null : l().map(module, (e, i) => (0, r.jsx)(es, {
      project: i,
      overrideType: e.type,
      overrideId: e.id,
      disabled: t,
      error: n[i],
      onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
      onBuildOverrideRemoved: this.handleBuildOverrideRemoved
    }, i))
  }
  renderRefreshButton() {
    return !this.state.didSave || this.isDirty() ? null : (0, Chunk951288.jsx)(Chunk481060.zxk, {
      variant: "secondary",
      text: "Reload App",
      onClick: () => location.reload()
    })
  }
  renderLinkButton() {
    let {
      buildOverrides: e
    } = this.state;
    return null == module || 0 === Object.keys(module).length ? null : (0, Chunk951288.jsx)(Chunk681715.u, {
      text: "Generate Public Link",
      children: (0, Chunk951288.jsx)(Chunk481060.hU, {
        variant: "secondary",
        icon: Chunk481060.xPt,
        "aria-label": "Generate Public Link",
        onClick: this.handleLinkGeneration
      })
    })
  }
  renderSaveButton() {
    if (!this.isDirty()) return null;
    let {
      saving: e,
      buildOverrides: t
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "critical-primary",
        text: "Discard Changes",
        onClick: this.handleDiscardChanges,
        disabled: module
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "active",
        text: "Save Build Overrides",
        disabled: eo(null != exports ? exports : {}),
        onClick: this.handleSaveChanges,
        loading: module
      })]
    })
  }
  render() {
    let e, {
      loading: t,
      saving: n,
      buildOverrides: i
    } = this.state;
    e = exports ? (0, Chunk951288.jsx)(Chunk481060.$jN, {
      className: Chunk10198.marginTop20
    }) : null != Chunk647438 && 0 === Object.keys(Chunk647438).length ? this.renderEmpty() : this.renderItems();
    let a = !require && !exports && this.getAvailableProjects().length > 0,
      o = eo(null != Chunk647438 ? Chunk647438 : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, Chunk951288.jsx)(Chunk481060.Text, {
        color: "text-danger",
        variant: "text-md/normal",
        children: "Mobile build overrides must be generated using the desktop/web stable client for now!"
      }) : null;
    return (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
      children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
        className: Chunk10198.marginTop60,
        title: "Build Overrides",
        tag: Chunk481060.RB0.H1,
        children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 16,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
            label: "Add Build Override",
            placeholder: "discord_project",
            description: "Select a project to create a build override for.",
            value: null,
            options: this.getAvailableProjects().map(e => ({
              label: e,
              value: e
            })),
            onChange: this.handleAddBuildOverride,
            isDisabled: !Chunk120356
          }), o, module, (0, Chunk951288.jsxs)(Chunk481060.hE2, {
            justify: "end",
            children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()]
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), ee(this, "state", {
      loading: true,
      buildOverrides: {},
      loadedBuildOverrides: {},
      errors: {},
      saving: false,
      didSave: false
    }), ee(this, "handleAddBuildOverride", e => {
      if (null == e) return;
      let t = er(et({}, this.state.buildOverrides), {
        [e]: {
          type: "branch",
          id: ""
        }
      });
      this.setState({
        buildOverrides: t
      })
    }), ee(this, "handleBuildOverrideUpdated", (e, t) => {
      let {
        buildOverrides: n
      } = this.state, r = et({}, null != n ? n[e] : {}, t), i = er(et({}, this.state.buildOverrides), {
        [e]: r
      });
      this.setState({
        buildOverrides: i
      })
    }), ee(this, "handleBuildOverrideRemoved", e => {
      let t = et({}, this.state.buildOverrides);
      delete t[e], this.setState({
        buildOverrides: t
      })
    }), ee(this, "handleDiscardChanges", () => {
      this.setState({
        buildOverrides: l().cloneDeep(this.state.loadedBuildOverrides),
        errors: {},
        didSave: false
      })
    }), ee(this, "handleSaveChanges", async () => {
      let {
        buildOverrides: e
      } = this.state;
      if (null == e) return;
      this.setState({
        saving: true
      });
      let t = await (0, v.aD)(e);
      if (200 === t.status) {
        let e = t.body;
        this.setState({
          buildOverrides: e,
          loadedBuildOverrides: l().cloneDeep(e),
          errors: {},
          didSave: true,
          saving: false
        })
      } else if (400 === t.status) {
        let e = t.body;
        this.setState({
          errors: e,
          saving: false,
          didSave: false
        })
      } else this.setState({
        saving: false,
        didSave: false
      })
    }), ee(this, "handleLinkGeneration", () => {
      let {
        buildOverrides: e
      } = this.state;
      (0, h.h7j)(t => (0, r.jsx)(ec, er(et({}, t), {
        buildOverrides: e
      })))
    })
  }
}
class ec extends Chunk647438.Component {
  isMobile() {
    var e;
    return eo(null != (e = this.props.buildOverrides) ? module : {})
  }
  renderSettingsForm() {
    let {
      ttlSeconds: e,
      releaseChannel: t,
      userIdEntry: n,
      userIdEntryError: i,
      allowedVersions: a,
      allowedVersionEntry: o,
      allowedVersionEntryError: s,
      allowLoggedOut: l,
      experiments: c,
      experimentsError: u
    } = this.state, d = Chunk908442.S6.find(t => t.value === e), f = Chunk120356.map(e => ({
      label: e,
      value: e
    }));
    return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 20,
      children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
        label: "Expire After",
        value: null != Chunk433517 ? Chunk433517.value : null,
        options: Chunk908442.S6,
        onChange: this.handleExpirationChange
      }), this.isMobile() ? null : (0, Chunk951288.jsx)(Chunk481060.q4e, {
        label: "Release Channel",
        value: exports,
        options: Chunk908442.F$,
        onChange: this.handleReleaseChannelChange
      }), this.isMobile() ? (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 20,
        children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
          label: "Add allowed app version (required)",
          autoFocus: true,
          value: o,
          onKeyDown: this.handleAllowedVersionEnter,
          error: Chunk392711,
          onChange: this.handleAllowedVersionEntry,
          placeholder: "Example: 34",
          trailing: {
            icon: Chunk481060.qJs,
            onClick: this.handleAddAllowedVersion,
            "aria-label": "Add"
          }
        }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
          label: "Remove allowed app version",
          value: null,
          options: Chunk692547,
          onChange: this.handleRemoveAllowedVersion,
          isDisabled: 0 === Chunk120356.length
        })]
      }) : null, this.isMobile() ? null : (0, Chunk951288.jsx)(Chunk481060.Kx8, {
        label: "Limit to User IDs (optional)",
        helperText: "User IDs can be separated by whitespace or commas.",
        value: require,
        error: Chunk647438,
        onBlur: () => this.setUserEntryError(""),
        onChange: this.handleUserIDEntry
      }), (0, Chunk951288.jsx)(Chunk481060.Kx8, {
        label: "Client Experiment Override",
        description: "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
        value: Chunk268146,
        error: Chunk442837,
        onChange: this.handleExperiments,
        placeholder: '{"2022-01_threads":1}'
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        onChange: this.handleAllowLoggedOut,
        value: l,
        children: "Allow logged out users"
      })]
    })
  }
  renderHelpMessage() {
    let {
      statusText: e,
      status: t
    } = this.state;
    if (null == module) return (0, Chunk951288.jsx)("div", {});
    let n = Chunk481060.QYI.INFO;
    switch (exports) {
      case 0:
        n = Chunk481060.QYI.ERROR;
        break;
      case 1:
        n = Chunk481060.QYI.WARNING
    }
    return (0, Chunk951288.jsx)(Chunk481060.Wn, {
      messageType: require,
      children: module
    })
  }
  render() {
    let {
      onClose: e,
      transitionState: t
    } = this.props, {
      publicLink: n
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk82659.Modal, {
      title: "Generate Public Build Override Link",
      input: this.renderHelpMessage(),
      actionBarInput: (0, Chunk951288.jsx)(Chunk484614.Z, {
        value: require
      }),
      transitionState: exports,
      "aria-label": "Generate Public Build Override Link",
      actions: [{
        variant: "primary",
        text: "Generate Link",
        onClick: this.handleGenerateLink
      }],
      onClose: module,
      children: this.renderSettingsForm()
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, ee(this, "state", {
      ttlSeconds: 3600,
      releaseChannel: "all",
      userIds: new Set,
      userIdEntry: "",
      userIdEntryError: null,
      allowedVersions: [],
      allowedVersionEntry: "",
      allowedVersionEntryError: null,
      publicLink: " ",
      statusText: null,
      status: 0,
      allowLoggedOut: false
    }), ee(this, "setUserEntryError", e => {
      this.setState({
        userIdEntryError: e
      })
    }), ee(this, "setStatusMessage", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
      t.setState({
        statusText: e,
        status: n
      })
    }), ee(this, "handleUserIDEntry", e => {
      if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
      let t = new Set(e.split(/[,\s]+/).filter(Boolean));
      this.setState({
        userIdEntry: e,
        userIds: t
      })
    }), ee(this, "setAllowedVersionError", e => {
      this.setState({
        allowedVersionEntryError: e
      })
    }), ee(this, "handleAllowedVersionEntry", e => {
      this.setState({
        allowedVersionEntry: e
      })
    }), ee(this, "handleAllowedVersionEnter", e => {
      e.charCode === q.yXg.ENTER && this.handleAddAllowedVersion()
    }), ee(this, "handleAddAllowedVersion", () => {
      let {
        allowedVersions: e,
        allowedVersionEntry: t
      } = this.state;
      return 0 === (t = t.trim()).length ? this.setAllowedVersionError("Enter a valid version number!") : e.indexOf(t) >= 0 ? this.setAllowedVersionError("You already added that version!") : void this.setState({
        allowedVersions: [...e, t],
        allowedVersionEntry: "",
        allowedVersionEntryError: ""
      })
    }), ee(this, "handleRemoveAllowedVersion", e => {
      let {
        allowedVersions: t
      } = this.state;
      t = t.filter(t => t !== e), this.setState({
        allowedVersions: t
      })
    }), ee(this, "handleAllowLoggedOut", e => {
      this.setState({
        allowLoggedOut: e
      })
    }), ee(this, "handleExpirationChange", e => {
      this.setState({
        ttlSeconds: e
      })
    }), ee(this, "handleReleaseChannelChange", e => {
      this.setState({
        releaseChannel: e
      })
    }), ee(this, "handleExperiments", e => {
      if (0 === e.trim().length) return void this.setState({
        experimentsError: true
      });
      try {
        let t = JSON.parse(e);
        for (let e in t) {
          if (null == e.match(/^[0-9]{4}\-[0-9]{2}(-|_)[a-z0-9_-]+$/)) return void this.setState({
            experimentsError: "".concat(e, " is an invalid experiment name")
          });
          if ("number" != typeof t[e]) return void this.setState({
            experimentsError: "".concat(e, " has an invalid bucket override")
          })
        }
      } catch (e) {
        this.setState({
          experimentsError: "Unable to parse experiments ".concat(e.message)
        });
        return
      }
      this.setState({
        experiments: e,
        experimentsError: true
      })
    }), ee(this, "generatePayload", () => ({
      overrides: this.props.buildOverrides,
      meta: {
        release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
        ttl_seconds: this.state.ttlSeconds,
        user_ids: Array.from(this.state.userIds),
        allowed_versions: this.isMobile() ? this.state.allowedVersions : true,
        allow_logged_out: this.state.allowLoggedOut,
        experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
      }
    })), ee(this, "handleGenerateLink", async () => {
      if (this.isMobile() && 0 === this.state.allowedVersions.length) return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
      this.setStatusMessage(null);
      let e = this.generatePayload(),
        t = await (0, v.M3)(e);
      false !== t.error ? this.setStatusMessage(JSON.stringify(t.error), 0) : (this.setState({
        publicLink: t.url.toString()
      }), 0 === e.meta.user_ids.length && this.setStatusMessage("Warning! No users added to the whitelist! This link could be used by anyone to override their build.", 1))
    })
  }
}

function eu() {
  let {
    horizontalSpacing: e,
    verticalSpacing: t,
    maxHorizontalSpacing: n,
    maxVerticalSpacing: a
  } = (0, Chunk482215.i)(), o = Chunk647438.useMemo(() => Array.from({
    length: require + 1
  }, (e, t) => t), [require]), s = Chunk647438.useMemo(() => Array.from({
    length: Chunk120356 + 1
  }, (e, t) => t), [Chunk120356]), {
    cssDebuggingEnabled: l,
    layoutDebuggingEnabled: c
  } = (0, Chunk442837.cj)([Chunk857192.default], () => ({
    cssDebuggingEnabled: Chunk857192.default.cssDebuggingEnabled,
    layoutDebuggingEnabled: Chunk857192.default.layoutDebuggingEnabled
  })), d = (0, Chunk580747.Z)("highlight_void_toggleables");
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: l,
        note: "Display raw colors as pink. Toggling this will refresh the browser.",
        onChange: e => {
          (0, E.y)({
            cssDebuggingEnabled: e
          }), setTimeout(() => location.reload(), 500)
        },
        children: "Enable CSS Debugging"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk268146,
        note: "Renders a grid on top of the app to help debug layout alignment issues.",
        onChange: e => {
          (0, E.y)({
            layoutDebuggingEnabled: e
          })
        },
        children: "Enable Layout Debugging"
      })
    }), (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
      children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk10198.marginBottom20,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Horizontal Grid Spacing"
        }), (0, Chunk951288.jsx)(Chunk481060.R94, {
          className: Chunk10198.marginBottom20,
          type: Chunk481060.geA.DESCRIPTION,
          children: "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines."
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: module,
          minValue: 0,
          maxValue: require,
          markers: o,
          onValueChange: e => A.i.getState().setHorizontalSpacing(e),
          onValueRender: e => "".concat(Math.round(e), "px"),
          onMarkerRender: e => e % 4 == 0 ? "".concat(e) : true,
          equidistant: true
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk10198.marginBottom20,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Vertical Grid Spacing"
        }), (0, Chunk951288.jsx)(Chunk481060.R94, {
          className: Chunk10198.marginBottom20,
          type: Chunk481060.geA.DESCRIPTION,
          children: "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines."
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: exports,
          minValue: 0,
          maxValue: Chunk120356,
          markers: Chunk392711,
          onValueChange: e => A.i.getState().setVerticalSpacing(e),
          onValueRender: e => "".concat(Math.round(e), "px"),
          onMarkerRender: e => e % 4 == 0 ? "".concat(e) : true,
          equidistant: true
        })]
      })]
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk433517,
        note: "Highlights toggleable components: Checkbox (green), RadioGroup (yellow), Switch (blue)",
        onChange: e => (0, C.Z)("highlight_void_toggleables", e),
        children: "Highlight Toggleable Components"
      })
    })]
  })
}

function ed() {
  let {
    isTracingRequests: e,
    isForcedCanary: t,
    isAxeEnabled: n,
    isSourceMapsEnabled: i,
    isIdleStatusIndicatorEnabled: a,
    onlyShowPreviewAppCollections: o,
    disableAppCollectionsCache: s,
    preventPopoutClose: l,
    logKeyboardMismatches: c
  } = (0, Chunk442837.cj)([Chunk857192.default], () => ({
    isTracingRequests: Chunk857192.default.isTracingRequests,
    isForcedCanary: Chunk857192.default.isForcedCanary,
    isAxeEnabled: Chunk857192.default.isAxeEnabled,
    isSourceMapsEnabled: Chunk857192.default.sourceMapsEnabled,
    isIdleStatusIndicatorEnabled: Chunk857192.default.isIdleStatusIndicatorEnabled,
    onlyShowPreviewAppCollections: Chunk857192.default.onlyShowPreviewAppCollections,
    disableAppCollectionsCache: Chunk857192.default.disableAppCollectionsCache,
    preventPopoutClose: Chunk857192.default.preventPopoutClose,
    logKeyboardMismatches: Chunk857192.default.logKeyboardMismatches
  })), d = (0, Chunk171393.Z)("go_back_to_regular_input"), f = Chunk695346.zY.useSetting();
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        note: "Force trace all client requests with APM",
        onChange: e => (0, E.y)({
          trace: e
        }),
        children: "Enable Tracing Requests"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        note: "Force all API requests to canary instances",
        onChange: e => (0, E.y)({
          canary: e
        }),
        children: "Enable Forced Canary"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk692547,
        note: "Make user targetable for all active ads",
        onChange: e => H.zY.updateSetting(e),
        children: "Ads auto-targeting"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk647438,
        note: "Only enable on devices you trust.",
        onChange: e => (0, E.y)({
          sourceMapsEnabled: e
        }),
        children: "Enable source maps to be loaded on this client"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk120356,
        note: "Displays a floating idle status indicator",
        onChange: e => (0, E.y)({
          idleStatusIndicatorEnabled: e
        }),
        children: "Enable idle status indicator"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        note: "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
        onChange: e => (0, E.y)({
          axeEnabled: e
        }),
        children: "Enable Accessibility Auditing"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: l,
        note: "This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.",
        onChange: e => (0, E.y)({
          preventPopoutClose: e
        }),
        children: "Prevent Popouts From Closing Automatically"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk268146,
        note: "Logs mismatches in detected keyboard codes to the console",
        onChange: e => (0, E.y)({
          logKeyboardMismatches: e
        }),
        children: "Enable Logging of Keyboard Mismatches"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: o,
        note: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        onChange: e => (0, E.y)({
          onlyShowPreviewAppCollections: e
        }),
        children: "Preview unpublished application collections"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk392711,
        note: "Disable application collections cache so that you can see updates to collections immediately.",
        onChange: e => (0, E.y)({
          disableAppCollectionsCache: e
        }),
        children: "Disable application collections cache"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk433517,
        note: "Disable aligning chat input to the bottom of the screen",
        onChange: e => {
          B.default.track(q.rMx.GUILD_JOIN_FEEDBACK, {
            reason: "disable-align-chat-input",
            rating: e ? "yes" : "no"
          }), (0, P.s)("go_back_to_regular_input", {
            enabled: e
          })
        },
        children: "Disable aligning chat input to the bottom of the screen"
      })
    })]
  })
}

function ef() {
  let {
    isLoggingGatewayEvents: e,
    isLoggingOverlayEvents: t,
    isLoggingAnalyticsEvents: n,
    isAnalyticsDebuggerEnabled: i
  } = (0, Chunk442837.cj)([Chunk857192.default], () => ({
    isLoggingGatewayEvents: Chunk857192.default.isLoggingGatewayEvents,
    isLoggingOverlayEvents: Chunk857192.default.isLoggingOverlayEvents,
    isLoggingAnalyticsEvents: Chunk857192.default.isLoggingAnalyticsEvents,
    isAnalyticsDebuggerEnabled: Chunk857192.default.isAnalyticsDebuggerEnabled
  }));
  return (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        note: "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
        onChange: e => (0, E.y)({
          logGatewayEvents: e
        }),
        children: "Enable Logging of Gateway Events to Console"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        note: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
        onChange: e => (0, E.y)({
          logOverlayEvents: e
        }),
        children: "Enable Logging of Overlay RPC Events & Commands"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        note: "Logs all analytics events to the developer console",
        onChange: e => (0, E.y)({
          logAnalyticsEvents: e
        }),
        children: "Enable Logging of Analytics Events"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk647438,
        note: "Displays a floating debugger with viewed impressions",
        onChange: e => (0, E.y)({
          analyticsDebuggerEnabled: e
        }),
        children: "Enable standard analytics debugger view"
      })
    })]
  })
}

function e_() {
  throw Error("Send help")
}

function ep(e) {
  F.ZP.triggerJSException(e)
}

function eh() {
  let e = (0, Chunk32300.XE)("developer_settings"),
    t = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.getForcedRenderMode()),
    [n, a] = Chunk647438.useState(false),
    [o, s] = Chunk647438.useState(""),
    l = module || exports === Chunk837268.R5.OUT_OF_PROCESS_V3 || exports === Chunk837268.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
  return (Chunk647438.useEffect(() => {
    (async () => {
      Chunk392711(await (0, Chunk808506.getOverlayURL)())
    })()
  }, []), require) ? {} : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: [Chunk670873.buttonsContainer, Chunk10198.marginBottom20].join(" "),
      children: [(0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
        children: l ? (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Open Overlay",
          onClick: () => (0, Chunk398269.f)(exports)
        }) : (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Open Overlay",
          onClick: () => window.open(o, "_blank"),
          disabled: "" === o
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Reset Socket",
          onClick: () => {
            Chunk38618.Z.getSocket().close(), Chunk38618.Z.getSocket().connect()
          }
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Clear Caches",
          onClick: () => {
            Chunk570140.Z.dispatch({
              type: "CLEAR_CACHES",
              reason: "Requested by user",
              preventWritingCachesAgainThisSession: true,
              resetSocket: true
            })
          }
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_CRASHES,
      children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
        title: "Crashes",
        tag: Chunk481060.RB0.H1,
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk670873.buttonsContainer,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
            value: true,
            options: [{
              value: true,
              label: "Native libdiscord crash"
            }, {
              value: 0,
              label: "Abort()"
            }, {
              value: 1,
              label: "SIGSEGV()"
            }, {
              value: 2,
              label: "EXCEPTION_ACCESS_VIOLATION"
            }, {
              value: 3,
              label: "RaiseFailFastException"
            }, {
              value: 4,
              label: "Out of Memory"
            }],
            onChange: e => null != e && F.ZP.crash(e)
          }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
            value: true,
            options: [{
              value: true,
              label: "Native JS crash"
            }, {
              value: Chunk268146.Xo.RendererProcessDelayed,
              label: "Delayed exception in renderer process"
            }, {
              value: Chunk268146.Xo.RendererProcess,
              label: "Exception in renderer process"
            }, {
              value: Chunk268146.Xo.MainProcess,
              label: "Exception in main process"
            }],
            onChange: e => null != e ? ep(e) : true
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "React Crash",
            onClick: () => Chunk120356(true)
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "onClick Throw",
            onClick: e_
          })]
        })
      })
    })]
  })
}

function em() {
  let e = (0, Chunk442837.e7)([Chunk558724.Z], () => Chunk558724.Z.getSurveyOverride()),
    [t, n] = Chunk647438.useState(null != module ? module : ""),
    a = e => {
      e.preventDefault(), t.length > 0 ? b.Xq(t) : b.Xq(null)
    };
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
    children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: "Survey Override",
      className: Chunk10198.marginTop60,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        children: "Copy the ID of the Survey you want to test:"
      }), (0, Chunk951288.jsx)("form", {
        className: Chunk670873.surveyOverride,
        onSubmit: Chunk120356,
        children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          direction: "horizontal",
          gap: 8,
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            fullWidth: true,
            value: exports,
            onChange: require
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Save Override",
            type: "submit"
          })]
        })
      })]
    })
  })
}

function eg() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk802098.Z], () => Chunk802098.Z.overrideId()),
    [n, a] = Chunk647438.useState(null != (e = Chunk802098.Z.overrideId()) ? module : ""),
    o = () => {
      "" === require ? Chunk661111.Z.setChangelogOverride(null) : Chunk661111.Z.setChangelogOverride(require)
    },
    s = () => {
      let e = new Date("2018-01-01");
      Chunk695346.l4.updateSetting(Chunk709054.default.fromTimestamp(module.getTime())), Chunk433517.K.set("lastChangeLogDate", module)
    };
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: "Changelog",
      className: Chunk10198.marginTop60,
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Changelog Override"
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            children: "Enter the ID of the changelog you want to test This will override the changelog that is shown to the user."
          }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
            direction: "horizontal",
            gap: 8,
            children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
              fullWidth: true,
              value: require,
              onChange: Chunk120356
            }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Update Changelog",
              onClick: o,
              disabled: exports === require
            })]
          })]
        }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Reset Changelog"
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            children: "This will reset the changelog, so it will show again on the next startup."
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Reset Changelog",
            onClick: Chunk392711
          })]
        })]
      })
    })
  })
}

function eE() {
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: "Client-Side Overrides",
      className: Chunk10198.marginTop60,
      children: (0, Chunk951288.jsx)(Chunk481060.Kqy, {
        gap: 16,
        children: (0, Chunk951288.jsx)("div", {
          className: [Chunk670873.buttonsContainer, Chunk10198.marginBottom20].join(" "),
          children: (0, Chunk951288.jsx)(Chunk306052.g, {})
        })
      })
    })
  })
}

function eb() {
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(el, {}), (0, Chunk951288.jsx)(em, {}), (0, Chunk951288.jsx)(eg, {}), (0, Chunk951288.jsx)(eE, {})]
  })
}
let ey = function() {
  return (0, Chunk951288.jsx)(Chunk10298.N, {
    header: "Developer Options",
    children: (0, Chunk951288.jsx)(Chunk526156.Z, {
      parentSetting: Chunk726985.s6.DEVELOPER_OPTIONS,
      settingsSection: Chunk981631.oAB.DEVELOPER_OPTIONS,
      tabs: [{
        title: "Overrides",
        component: eb,
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB
      }, {
        title: "Manual Triggers",
        component: eh,
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB
      }, {
        title: "Developer Flags",
        component: ed,
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_FLAGS_TAB
      }, {
        title: "Logging",
        component: ef,
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_LOGGING_TAB
      }, {
        title: "Design Tools",
        component: eu,
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB
      }]
    })
  })
}