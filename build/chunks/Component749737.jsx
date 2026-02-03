/** Chunk was on 44669 **/
/** chunk id: 749737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eb,
  s: () => es
}), require("./896048.js"), require("./747238.js"), require("./733351.js"), require("./457529.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk158954 = require("./158954.js"),
  Chunk141931 = require("./141931.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk506774 = require("./506774.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk256311 = require("./256311.js"),
  Chunk926919 = require("./926919.js"),
  Chunk246605 = require("./246605.js"),
  Chunk414079 = require("./414079.jsx"),
  Chunk416052 = require("./416052.jsx"),
  Chunk148810 = require("./148810.js"),
  Chunk380610 = require("./380610.js"),
  Chunk883600 = require("./883600.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk172272 = require("./172272.jsx"),
  Chunk263834 = require("./263834.js"),
  Chunk865116 = require("./865116.js"),
  Chunk53705 = require("./53705.js"),
  Chunk354328 = require("./354328.js"),
  Chunk142120 = require("./142120.js"),
  Chunk353171 = require("./353171.js"),
  Chunk735729 = require("./735729.js"),
  Chunk237984 = require("./237984.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk111162 = require("./111162.js"),
  Chunk274184 = require("./274184.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk837921 = require("./837921.js"),
  Chunk544028 = require("./544028.js"),
  Chunk253932 = require("./253932.js"),
  Chunk559248 = require("./559248.jsx"),
  Chunk740625 = require("./740625.jsx"),
  Chunk524738 = require("./524738.jsx"),
  Chunk179690 = require("./179690.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk986238 = require("./986238.js"),
  Chunk254441 = require("./254441.js"),
  Chunk506823 = require("./506823.js"),
  Chunk473169 = require("./473169.js");

function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      $(e, t, n[t])
    })
  }
  return e
}

function et(e, t) {
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
}
let en = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
  er = [{
    id: "branch",
    value: "branch",
    label: "Branch Name"
  }, {
    id: "id",
    value: "id",
    label: "Commit SHA"
  }];

function el(e) {
  return "discord_ios" in e || "discord_android" in e
}
class ei extends Chunk64700.Component {
  render() {
    let {
      project: e,
      overrideType: t,
      overrideId: n,
      disabled: l,
      error: i
    } = this.props;
    return (0, r.jsxs)(E.A, {
      direction: E.A.Direction.VERTICAL,
      className: s()(J.oS, Z.SX, Q.N, J.nM),
      children: [(0, r.jsx)(O.A, {
        className: s()(J.lL, {
          [J.zi]: l
        }),
        onClick: l ? true : this.handleRemoveBuildOverride
      }), (0, r.jsxs)(E.A, {
        className: Z.QB,
        children: [(0, r.jsx)(E.A.Child, {
          basis: "50%",
          children: (0, r.jsx)(f.l6P, {
            selectionMode: "single",
            label: "Override Type",
            options: er,
            onSelectionChange: this.handleOverrideTypeChanged,
            value: t,
            disabled: l
          })
        }), (0, r.jsx)(E.A.Child, {
          wrap: true,
          basis: "50%",
          children: (0, r.jsx)(f.ksK, {
            label: "branch" === t ? "Branch Name" : "Commit SHA",
            value: n,
            onChange: this.handleOverrideIdChanged,
            disabled: l
          })
        })]
      }), (0, r.jsxs)(E.A.Child, {
        children: [null != i && "" !== i && (0, r.jsx)(f.Text, {
          className: J.AS,
          color: "text-feedback-critical",
          variant: "text-sm/normal",
          children: i
        }), (0, r.jsxs)(f.Text, {
          variant: "text-sm/normal",
          className: J.AS,
          children: ["This controls the build that will be served for the ", (0, r.jsx)("code", {
            children: e
          }), " project."]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), $(this, "handleRemoveBuildOverride", () => {
      this.props.onBuildOverrideRemoved(this.props.project)
    }), $(this, "handleOverrideIdChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        id: e
      })
    }), $(this, "handleOverrideTypeChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        type: e,
        id: ""
      })
    })
  }
}
class es extends Chunk64700.Component {
  async refreshBuildOverrides() {
    this.setState({
      loading: true
    });
    let e = await (0, _.bD)();
    this.setState({
      loading: false,
      buildOverrides: e,
      loadedBuildOverrides: o().cloneDeep(e),
      errors: {}
    })
  }
  isDirty() {
    let {
      buildOverrides: e,
      loadedBuildOverrides: t
    } = this.state;
    return !o().isEqual(e, t)
  }
  componentDidMount() {
    this.refreshBuildOverrides()
  }
  getAvailableProjects() {
    let {
      buildOverrides: e
    } = this.state;
    if (null == e) return [];
    let t = Object.keys(e);
    return o().without(en, ...t)
  }
  renderEmpty() {
    return (0, r.jsx)(f.ppr, {
      theme: B.A.theme,
      className: s()(Z.eT, Z.SX),
      children: (0, r.jsx)(f.SGT, {
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
    return null == e ? null : o().map(e, (e, l) => (0, r.jsx)(ei, {
      project: l,
      overrideType: e.type,
      overrideId: e.id,
      disabled: t,
      error: n[l],
      onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
      onBuildOverrideRemoved: this.handleBuildOverrideRemoved
    }, l))
  }
  renderRefreshButton() {
    return !this.state.didSave || this.isDirty() ? null : (0, r.jsx)(f.Button, {
      variant: "secondary",
      text: "Reload App",
      onClick: () => location.reload()
    })
  }
  renderLinkButton() {
    let {
      buildOverrides: e
    } = this.state;
    return null == e || 0 === Object.keys(e).length ? null : (0, r.jsx)(g.m_, {
      text: "Generate Public Link",
      children: (0, r.jsx)(f.K0, {
        variant: "secondary",
        icon: f.qYV,
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
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.Button, {
        variant: "critical-primary",
        text: "Discard Changes",
        onClick: this.handleDiscardChanges,
        disabled: e
      }), (0, r.jsx)(f.Button, {
        variant: "primary",
        text: "Save Build Overrides",
        disabled: el(null != t ? t : {}),
        onClick: this.handleSaveChanges,
        loading: e
      })]
    })
  }
  render() {
    let e, {
      loading: t,
      saving: n,
      buildOverrides: l
    } = this.state;
    e = t ? (0, r.jsx)(f.y$y, {
      className: Z.QX
    }) : null != l && 0 === Object.keys(l).length ? this.renderEmpty() : this.renderItems();
    let i = !n && !t && this.getAvailableProjects().length > 0,
      s = el(null != l ? l : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, r.jsx)(f.Text, {
        color: "text-feedback-critical",
        variant: "text-md/normal",
        children: "Mobile build overrides must be generated using the desktop/web stable client for now!"
      }) : null;
    return (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
      children: (0, r.jsx)(f.nVY, {
        children: (0, r.jsxs)(f.BJc, {
          gap: 16,
          children: [(0, r.jsx)(f.l6P, {
            selectionMode: "single",
            label: "Add Build Override",
            placeholder: "discord_project",
            description: "Select a project to create a build override for.",
            layout: "horizontal-responsive",
            value: true,
            options: this.getAvailableProjects().map(e => ({
              id: e,
              label: e,
              value: e
            })),
            onSelectionChange: this.handleAddBuildOverride,
            disabled: !i
          }), s, e, (0, r.jsxs)(f.ButtonGroup, {
            justify: "end",
            children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()]
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), $(this, "state", {
      loading: true,
      buildOverrides: {},
      loadedBuildOverrides: {},
      errors: {},
      saving: false,
      didSave: false
    }), $(this, "handleAddBuildOverride", e => {
      if (null == e) return;
      let t = et(ee({}, this.state.buildOverrides), {
        [e]: {
          type: "branch",
          id: ""
        }
      });
      this.setState({
        buildOverrides: t
      })
    }), $(this, "handleBuildOverrideUpdated", (e, t) => {
      let {
        buildOverrides: n
      } = this.state, r = ee({}, null != n ? n[e] : {}, t), l = et(ee({}, this.state.buildOverrides), {
        [e]: r
      });
      this.setState({
        buildOverrides: l
      })
    }), $(this, "handleBuildOverrideRemoved", e => {
      let t = ee({}, this.state.buildOverrides);
      delete t[e], this.setState({
        buildOverrides: t
      })
    }), $(this, "handleDiscardChanges", () => {
      this.setState({
        buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
        errors: {},
        didSave: false
      })
    }), $(this, "handleSaveChanges", async () => {
      let {
        buildOverrides: e
      } = this.state;
      if (null == e) return;
      this.setState({
        saving: true
      });
      let t = await (0, x.Zk)(e);
      if (200 === t.status) {
        let e = t.body;
        this.setState({
          buildOverrides: e,
          loadedBuildOverrides: o().cloneDeep(e),
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
    }), $(this, "handleLinkGeneration", () => {
      let {
        buildOverrides: e
      } = this.state;
      (0, f.qfG)(t => (0, r.jsx)(ea, et(ee({}, t), {
        buildOverrides: e
      })))
    })
  }
}
class ea extends Chunk64700.Component {
  isMobile() {
    var e;
    return el(null != (e = this.props.buildOverrides) ? e : {})
  }
  renderSettingsForm() {
    let {
      ttlSeconds: e,
      releaseChannel: t,
      userIdEntry: n,
      userIdEntryError: l,
      allowedVersions: i,
      allowedVersionEntry: s,
      allowedVersionEntryError: a,
      allowLoggedOut: o,
      experiments: c,
      experimentsError: u
    } = this.state, d = q.fL.find(t => t.value === e), p = i.map(e => ({
      id: e,
      label: e,
      value: e
    }));
    return (0, r.jsxs)(f.BJc, {
      gap: 20,
      children: [(0, r.jsx)(f.l6P, {
        selectionMode: "single",
        label: "Expire After",
        value: null != d ? d.value : true,
        options: q.fL,
        onSelectionChange: this.handleExpirationChange
      }), this.isMobile() ? null : (0, r.jsx)(f.l6P, {
        selectionMode: "single",
        label: "Release Channel",
        value: t,
        options: q.VP,
        onSelectionChange: this.handleReleaseChannelChange
      }), this.isMobile() ? (0, r.jsxs)(f.BJc, {
        gap: 20,
        children: [(0, r.jsx)(f.ksK, {
          label: "Add allowed app version (required)",
          autoFocus: true,
          value: s,
          onKeyDown: this.handleAllowedVersionEnter,
          error: a,
          onChange: this.handleAllowedVersionEntry,
          placeholder: "Example: 34",
          trailing: {
            icon: f.j96,
            onClick: this.handleAddAllowedVersion,
            "aria-label": "Add"
          }
        }), (0, r.jsx)(f.l6P, {
          selectionMode: "single",
          label: "Remove allowed app version",
          value: true,
          options: p,
          onSelectionChange: this.handleRemoveAllowedVersion,
          disabled: 0 === i.length
        })]
      }) : null, this.isMobile() ? null : (0, r.jsx)(f.fs1, {
        label: "Limit to User IDs (optional)",
        helperText: "User IDs can be separated by whitespace or commas.",
        value: n,
        error: l,
        onBlur: () => this.setUserEntryError(""),
        onChange: this.handleUserIDEntry
      }), (0, r.jsx)(f.fs1, {
        label: "Client Experiment Override",
        description: "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
        value: c,
        error: u,
        onChange: this.handleExperiments,
        placeholder: '{"2022-01_threads":1}'
      }), (0, r.jsx)(f.dOG, {
        label: "Allow logged out users",
        checked: o,
        onChange: this.handleAllowLoggedOut
      })]
    })
  }
  renderHelpMessage() {
    let {
      statusText: e,
      status: t
    } = this.state;
    if (null == e) return (0, r.jsx)("div", {});
    let n = f.YCn.INFO;
    switch (t) {
      case 0:
        n = f.YCn.ERROR;
        break;
      case 1:
        n = f.YCn.WARNING
    }
    return (0, r.jsx)(f.po8, {
      messageType: n,
      children: e
    })
  }
  render() {
    let {
      onClose: e,
      transitionState: t
    } = this.props, {
      publicLink: n
    } = this.state;
    return (0, r.jsx)(c.Modal, {
      title: "Generate Public Build Override Link",
      input: this.renderHelpMessage(),
      actionBarInput: (0, r.jsx)(j.A, {
        value: n
      }),
      transitionState: t,
      "aria-label": "Generate Public Build Override Link",
      actions: [{
        variant: "primary",
        text: "Generate Link",
        onClick: this.handleGenerateLink
      }],
      onClose: e,
      children: this.renderSettingsForm()
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, $(this, "state", {
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
    }), $(this, "setUserEntryError", e => {
      this.setState({
        userIdEntryError: e
      })
    }), $(this, "setStatusMessage", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
      t.setState({
        statusText: e,
        status: n
      })
    }), $(this, "handleUserIDEntry", e => {
      if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
      let t = new Set(e.split(/[,\s]+/).filter(Boolean));
      this.setState({
        userIdEntry: e,
        userIds: t
      })
    }), $(this, "setAllowedVersionError", e => {
      this.setState({
        allowedVersionEntryError: e
      })
    }), $(this, "handleAllowedVersionEntry", e => {
      this.setState({
        allowedVersionEntry: e
      })
    }), $(this, "handleAllowedVersionEnter", e => {
      e.charCode === X.Ks6.ENTER && this.handleAddAllowedVersion()
    }), $(this, "handleAddAllowedVersion", () => {
      let {
        allowedVersions: e,
        allowedVersionEntry: t
      } = this.state;
      return 0 === (t = t.trim()).length ? this.setAllowedVersionError("Enter a valid version number!") : e.indexOf(t) >= 0 ? this.setAllowedVersionError("You already added that version!") : void this.setState({
        allowedVersions: [...e, t],
        allowedVersionEntry: "",
        allowedVersionEntryError: ""
      })
    }), $(this, "handleRemoveAllowedVersion", e => {
      let {
        allowedVersions: t
      } = this.state;
      t = t.filter(t => t !== e), this.setState({
        allowedVersions: t
      })
    }), $(this, "handleAllowLoggedOut", e => {
      this.setState({
        allowLoggedOut: e
      })
    }), $(this, "handleExpirationChange", e => {
      this.setState({
        ttlSeconds: e
      })
    }), $(this, "handleReleaseChannelChange", e => {
      this.setState({
        releaseChannel: e
      })
    }), $(this, "handleExperiments", e => {
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
    }), $(this, "generatePayload", () => ({
      overrides: this.props.buildOverrides,
      meta: {
        release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
        ttl_seconds: this.state.ttlSeconds,
        user_ids: Array.from(this.state.userIds),
        allowed_versions: this.isMobile() ? this.state.allowedVersions : true,
        allow_logged_out: this.state.allowLoggedOut,
        experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
      }
    })), $(this, "handleGenerateLink", async () => {
      if (this.isMobile() && 0 === this.state.allowedVersions.length) return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
      this.setStatusMessage(null);
      let e = this.generatePayload(),
        t = await (0, x.SB)(e);
      false !== t.error ? this.setStatusMessage(JSON.stringify(t.error), 0) : (this.setState({
        publicLink: t.url.toString()
      }), 0 === e.meta.user_ids.length && this.setStatusMessage("Warning! No users added to the whitelist! This link could be used by anyone to override their build.", 1))
    })
  }
}

function eo() {
  let {
    horizontalSpacing: e,
    verticalSpacing: t
  } = (0, C.Or)(), n = l.useMemo(() => Array.from({
    length: C.YR + 1
  }, (e, t) => t), []), i = l.useMemo(() => Array.from({
    length: C.YR + 1
  }, (e, t) => t), []), {
    cssDebuggingEnabled: s,
    layoutDebuggingEnabled: a
  } = (0, d.cf)([M.default], () => ({
    cssDebuggingEnabled: M.default.cssDebuggingEnabled,
    layoutDebuggingEnabled: M.default.layoutDebuggingEnabled
  })), o = (0, T.A)("highlight_void_toggleables"), c = (0, T.A)("highlight_mana_components");
  return (0, r.jsxs)(f.nVY, {
    label: "Design Tools",
    children: [(0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_CSS_DEBUGGING,
      children: (0, r.jsx)(f.dOG, {
        label: "Enable CSS Debugging",
        description: "Display raw colors as pink. Toggling this will refresh the browser.",
        checked: s,
        onChange: e => {
          (0, A.x)({
            cssDebuggingEnabled: e
          }), setTimeout(() => location.reload(), 500)
        }
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
      children: (0, r.jsx)(f.dOG, {
        label: "Enable Layout Debugging",
        description: "Renders a grid on top of the app to help debug layout alignment issues.",
        checked: a,
        onChange: e => {
          (0, A.x)({
            layoutDebuggingEnabled: e
          })
        }
      })
    }), (0, r.jsxs)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
      children: [(0, r.jsx)(f.Apm, {
        label: "Horizontal Grid Spacing",
        description: "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        initialValue: e,
        minValue: 0,
        maxValue: C.YR,
        markers: n,
        onValueChange: e => C.Or.getState().setHorizontalSpacing(e),
        onValueRender: e => "".concat(Math.round(e), "px"),
        onMarkerRender: e => e % 4 == 0 ? "".concat(e) : true,
        equidistant: true
      }), (0, r.jsx)(f.Apm, {
        label: "Vertical Grid Spacing",
        description: "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        initialValue: t,
        minValue: 0,
        maxValue: C.YR,
        markers: i,
        onValueChange: e => C.Or.getState().setVerticalSpacing(e),
        onValueRender: e => "".concat(Math.round(e), "px"),
        onMarkerRender: e => e % 4 == 0 ? "".concat(e) : true,
        equidistant: true
      })]
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS,
      children: (0, r.jsx)(f.dOG, {
        label: "Highlight Mana Components",
        description: "Highlights all Mana design system components for easier debugging",
        checked: c,
        onChange: e => (0, N.L)("highlight_mana_components", e)
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES,
      children: (0, r.jsx)(f.dOG, {
        label: "Highlight Void Toggleable Components",
        description: "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue)",
        checked: o,
        onChange: e => (0, N.L)("highlight_void_toggleables", e)
      })
    })]
  })
}

function ec() {
  let {
    isTracingRequests: e,
    isForcedCanary: t,
    isAxeEnabled: n,
    isSourceMapsEnabled: l,
    onlyShowPreviewAppCollections: i,
    disableAppCollectionsCache: s,
    preventPopoutClose: a,
    logKeyboardMismatches: o
  } = (0, d.cf)([M.default], () => ({
    isTracingRequests: M.default.isTracingRequests,
    isForcedCanary: M.default.isForcedCanary,
    isAxeEnabled: M.default.isAxeEnabled,
    isSourceMapsEnabled: M.default.sourceMapsEnabled,
    onlyShowPreviewAppCollections: M.default.onlyShowPreviewAppCollections,
    disableAppCollectionsCache: M.default.disableAppCollectionsCache,
    preventPopoutClose: M.default.preventPopoutClose,
    logKeyboardMismatches: M.default.logKeyboardMismatches
  })), c = (0, d.bG)([I.Ay], () => I.Ay.get("idle_status_indicator")), u = (0, R.A)("go_back_to_regular_input"), p = H.HZ.useSetting();
  return (0, r.jsxs)(f.nVY, {
    label: "Developer Flags",
    children: [(0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_TRACING_REQUESTS,
      children: (0, r.jsx)(f.dOG, {
        label: "Enable Tracing Requests",
        description: "Force trace all client requests with APM",
        checked: e,
        onChange: e => (0, A.x)({
          trace: e
        })
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_FORCED_CANARY,
      children: (0, r.jsx)(f.dOG, {
        label: "Enable Forced Canary",
        description: "Force all API requests to canary instances",
        checked: t,
        onChange: e => (0, A.x)({
          canary: e
        })
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
      children: (0, r.jsx)(f.dOG, {
        label: "Ads auto-targeting",
        description: "Make user targetable for all active ads",
        checked: p,
        onChange: e => H.HZ.updateSetting(e)
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_SOURCE_MAPS,
      children: (0, r.jsx)(f.dOG, {
        label: "Enable source maps to be loaded on this client",
        description: "Only enable on devices you trust.",
        checked: l,
        onChange: e => (0, A.x)({
          sourceMapsEnabled: e
        })
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
      children: (0, r.jsx)(f.dOG, {
        label: "Enable idle status indicator",
        description: "Displays a floating idle status indicator",
        checked: c,
        onChange: e => S.L("idle_status_indicator", e)
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
      children: (0, r.jsx)(f.dOG, {
        label: "Enable Accessibility Auditing",
        description: "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
        checked: n,
        onChange: e => (0, A.x)({
          axeEnabled: e
        })
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
      children: (0, r.jsx)(f.dOG, {
        label: "Prevent Popouts From Closing Automatically",
        description: "This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.",
        checked: a,
        onChange: e => (0, A.x)({
          preventPopoutClose: e
        })
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
      children: (0, r.jsx)(f.dOG, {
        label: "Enable Logging of Keyboard Mismatches",
        description: "Logs mismatches in detected keyboard codes to the console",
        checked: o,
        onChange: e => (0, A.x)({
          logKeyboardMismatches: e
        })
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
      children: (0, r.jsx)(f.dOG, {
        label: "Preview unpublished application collections",
        description: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        checked: i,
        onChange: e => (0, A.x)({
          onlyShowPreviewAppCollections: e
        })
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
      children: (0, r.jsx)(f.dOG, {
        label: "Disable application collections cache",
        description: "Disable application collections cache so that you can see updates to collections immediately.",
        checked: s,
        onChange: e => (0, A.x)({
          disableAppCollectionsCache: e
        })
      })
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
      children: (0, r.jsx)(f.dOG, {
        label: "Disable aligning chat input to the bottom of the screen",
        description: "Disable aligning chat input to the bottom of the screen",
        checked: u,
        onChange: e => {
          k.default.track(X.HAw.GUILD_JOIN_FEEDBACK, {
            reason: "disable-align-chat-input",
            rating: e ? "yes" : "no"
          }), (0, w.s)("go_back_to_regular_input", {
            enabled: e
          })
        }
      })
    })]
  })
}

function eu() {
  let {
    isLoggingGatewayEvents: e,
    isLoggingOverlayEvents: t,
    isLoggingAnalyticsEvents: n
  } = (0, d.cf)([M.default], () => ({
    isLoggingGatewayEvents: M.default.isLoggingGatewayEvents,
    isLoggingOverlayEvents: M.default.isLoggingOverlayEvents,
    isLoggingAnalyticsEvents: M.default.isLoggingAnalyticsEvents
  })), l = (0, d.bG)([I.Ay], () => I.Ay.get("analytics_debugger"));
  return (0, r.jsx)(L.x, {
    setting: z.H.DEVELOPER_OPTIONS_LOGGING_TAB,
    children: (0, r.jsxs)(f.nVY, {
      label: "Logging",
      children: [(0, r.jsx)(L.x, {
        setting: z.H.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
        children: (0, r.jsx)(f.dOG, {
          label: "Enable Logging of Gateway Events to Console",
          description: "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
          checked: e,
          onChange: e => (0, A.x)({
            logGatewayEvents: e
          })
        })
      }), (0, r.jsx)(L.x, {
        setting: z.H.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
        children: (0, r.jsx)(f.dOG, {
          label: "Enable Logging of Overlay RPC Events & Commands",
          description: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
          checked: t,
          onChange: e => (0, A.x)({
            logOverlayEvents: e
          })
        })
      }), (0, r.jsx)(L.x, {
        setting: z.H.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
        children: (0, r.jsx)(f.dOG, {
          label: "Enable Logging of Analytics Events",
          description: "Logs all analytics events to the developer console",
          checked: n,
          onChange: e => (0, A.x)({
            logAnalyticsEvents: e
          })
        })
      }), (0, r.jsx)(L.x, {
        setting: z.H.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
        children: (0, r.jsx)(f.dOG, {
          label: "Enable standard analytics debugger view",
          description: "Displays a floating debugger with viewed impressions",
          checked: l,
          onChange: e => S.L("analytics_debugger", e)
        })
      })]
    })
  })
}

function ed() {
  throw Error("Send help")
}

function ep() {
  let [e, t] = l.useState(false);
  return e ? {} : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: [J.NC, Z.SX].join(" "),
      children: [(0, r.jsx)(L.x, {
        setting: z.H.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
        children: (0, r.jsx)(f.Button, {
          variant: "primary",
          text: "Open Overlay",
          onClick: () => (0, D.o)()
        })
      }), (0, r.jsx)(L.x, {
        setting: z.H.DEVELOPER_OPTIONS_RESET_SOCKET,
        children: (0, r.jsx)(f.Button, {
          variant: "primary",
          text: "Reset Socket",
          onClick: () => {
            P.A.getSocket().close(), P.A.getSocket().connect()
          }
        })
      }), (0, r.jsx)(L.x, {
        setting: z.H.DEVELOPER_OPTIONS_CLEAR_CACHES,
        children: (0, r.jsx)(f.Button, {
          variant: "primary",
          text: "Clear Caches",
          onClick: () => {
            m.h.dispatch({
              type: "CLEAR_CACHES",
              reason: "Requested by user",
              preventWritingCachesAgainThisSession: true,
              resetSocket: true
            })
          }
        })
      }), (0, r.jsx)(L.x, {
        setting: z.H.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS,
        children: (0, r.jsx)(f.Button, {
          variant: "primary",
          text: "Show TOTP Success",
          onClick: () => (0, W.sy)(true)
        })
      }), (0, r.jsx)(L.x, {
        setting: z.H.DEVELOPER_OPTIONS_TRIGGER_SUSPICIOUS_SESSIONS,
        children: (0, r.jsx)(f.Button, {
          variant: "primary",
          text: "Trigger Suspicious Sessions Notifications",
          onClick: () => {
            p.Bo.post({
              url: X.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG,
              rejectWithError: true
            })
          }
        })
      })]
    }), (0, r.jsx)(L.x, {
      setting: z.H.DEVELOPER_OPTIONS_CRASHES,
      children: (0, r.jsx)(f.nVY, {
        label: "Crashes",
        children: (0, r.jsxs)("div", {
          className: J.NC,
          children: [(0, r.jsx)(f.l6P, {
            label: "Native libdiscord crash",
            hideLabel: true,
            selectionMode: "single",
            value: true,
            options: [{
              id: "none",
              value: true,
              label: "Native libdiscord crash"
            }, {
              id: "abort",
              value: 0,
              label: "Abort()"
            }, {
              id: "sigsegv",
              value: 1,
              label: "SIGSEGV()"
            }, {
              id: "exception",
              value: 2,
              label: "EXCEPTION_ACCESS_VIOLATION"
            }, {
              id: "fail",
              value: 3,
              label: "RaiseFailFastException"
            }, {
              id: "out-of-memory",
              value: 4,
              label: "Out of Memory"
            }],
            onSelectionChange: e => null != e && V.Ay.crash(e)
          }), (0, r.jsx)(f.l6P, {
            selectionMode: "single",
            label: "Native JS crash",
            hideLabel: true,
            value: true,
            options: [{
              id: "none",
              value: true,
              label: "Native JS crash"
            }, {
              id: "delayed-exception-in-renderer-process",
              value: u.qQ.RendererProcessDelayed,
              label: "Delayed exception in renderer process"
            }, {
              id: "exception-in-renderer-process",
              value: u.qQ.RendererProcess,
              label: "Exception in renderer process"
            }, {
              id: "exception-in-main-process",
              value: u.qQ.MainProcess,
              label: "Exception in main process"
            }],
            onSelectionChange: e => null != e ? void V.Ay.triggerJSException(e) : true
          }), (0, r.jsx)(f.Button, {
            variant: "primary",
            text: "React Crash",
            onClick: () => t(true)
          }), (0, r.jsx)(f.Button, {
            variant: "primary",
            text: "onClick Throw",
            onClick: ed
          })]
        })
      })
    })]
  })
}

function eh() {
  let e = (0, d.bG)([G.Ay], () => G.Ay.getSurveyOverride()),
    [t, n] = l.useState(null != e ? e : "");
  return (0, r.jsx)(L.x, {
    setting: z.H.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
    children: (0, r.jsx)("form", {
      className: J.Nn,
      onSubmit: e => {
        e.preventDefault(), t.length > 0 ? y.xr(t) : y.xr(null)
      },
      children: (0, r.jsx)(f.nVY, {
        label: "Survey Override",
        description: "Copy the ID of the Survey you want to test:",
        children: (0, r.jsxs)(f.BJc, {
          direction: "horizontal",
          gap: 8,
          children: [(0, r.jsx)(f.ksK, {
            fullWidth: true,
            value: t,
            onChange: n
          }), (0, r.jsx)(f.Button, {
            variant: "primary",
            text: "Save Override",
            type: "submit"
          })]
        })
      })
    })
  })
}

function eg() {
  var e;
  let t = (0, d.bG)([v.A], () => v.A.overrideId()),
    [n, i] = l.useState(null != (e = v.A.overrideId()) ? e : "");
  return (0, r.jsx)(L.x, {
    setting: z.H.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
    children: (0, r.jsxs)(f.nVY, {
      label: "Changelog",
      children: [(0, r.jsxs)(f.BJc, {
        direction: "horizontal",
        gap: 8,
        align: "end",
        children: [(0, r.jsx)(f.ksK, {
          label: "Changelog Override",
          description: "Enter the ID of the changelog you want to test This will override the changelog that is shown to the user.",
          fullWidth: true,
          value: n,
          onChange: i
        }), (0, r.jsx)(f.Button, {
          variant: "primary",
          text: "Update Changelog",
          onClick: () => {
            "" === n ? b.A.setChangelogOverride(null) : b.A.setChangelogOverride(n)
          },
          disabled: t === n
        })]
      }), (0, r.jsx)(c.D0$, {
        label: "Reset Changelog",
        description: "This will reset the changelog, so it will show again on the next startup.",
        children: (0, r.jsx)(f.Button, {
          variant: "primary",
          text: "Reset Changelog",
          onClick: () => {
            let e = new Date("2018-01-01");
            H.pK.updateSetting(U.default.fromTimestamp(e.getTime())), h.w.set("lastChangeLogDate", e)
          }
        })
      })]
    })
  })
}

function ef() {
  return (0, r.jsx)(L.x, {
    setting: z.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
    children: (0, r.jsx)(f.nVY, {
      label: "Client-Side Overrides",
      children: (0, r.jsx)(F.M, {})
    })
  })
}

function em() {
  return (0, r.jsxs)(f.BJc, {
    gap: 24,
    children: [(0, r.jsx)(es, {}), (0, r.jsx)(c.cGx, {}), (0, r.jsx)(eh, {}), (0, r.jsx)(c.cGx, {}), (0, r.jsx)(eg, {}), (0, r.jsx)(c.cGx, {}), (0, r.jsx)(ef, {})]
  })
}
let eb = function() {
  return (0, r.jsx)(Y.R, {
    header: "Developer Options",
    children: (0, r.jsx)(K.A, {
      parentSetting: z.H.DEVELOPER_OPTIONS,
      settingsSection: X.nc_.DEVELOPER_OPTIONS,
      tabs: [{
        title: "Overrides",
        component: em,
        setting: z.H.DEVELOPER_OPTIONS_OVERRIDES_TAB
      }, {
        title: "Manual Triggers",
        component: ep,
        setting: z.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB
      }, {
        title: "Developer Flags",
        component: ec,
        setting: z.H.DEVELOPER_OPTIONS_FLAGS_TAB
      }, {
        title: "Logging",
        component: eu,
        setting: z.H.DEVELOPER_OPTIONS_LOGGING_TAB
      }, {
        title: "Design Tools",
        component: eo,
        setting: z.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB
      }]
    })
  })
}