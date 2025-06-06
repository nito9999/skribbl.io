/*!
 * Socket.IO v4.7.5
 * (c) 2014-2024 Guillermo Rauch
 * Released under the MIT License.
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).io = t()
}(this, (function() {
    "use strict";

    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (i = r.key, o = void 0, "symbol" == typeof(o = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != typeof r) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(i, "string")) ? o : String(o)), r)
        }
        var i, o
    }

    function r(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, i.apply(this, arguments)
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && a(e, t)
    }

    function s(e) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, s(e)
    }

    function a(e, t) {
        return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        }, a(e, t)
    }

    function c() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function u(e, t, n) {
        return u = c() ? Reflect.construct.bind() : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new(Function.bind.apply(e, r));
            return n && a(i, n.prototype), i
        }, u.apply(null, arguments)
    }

    function h(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return h = function(e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return u(e, arguments, s(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), a(r, e)
        }, h(e)
    }

    function f(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e) {
        var t = c();
        return function() {
            var n, r = s(e);
            if (t) {
                var i = s(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return f(e)
            }(this, n)
        }
    }

    function p() {
        return p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = s(e)););
                return e
            }(e, t);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
            }
        }, p.apply(this, arguments)
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s = !0,
            a = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return s = e.done, e
            },
            e: function(e) {
                a = !0, o = e
            },
            f: function() {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (a) throw o
                }
            }
        }
    }
    var v = Object.create(null);
    v.open = "0", v.close = "1", v.ping = "2", v.pong = "3", v.message = "4", v.upgrade = "5", v.noop = "6";
    var g = Object.create(null);
    Object.keys(v).forEach((function(e) {
        g[v[e]] = e
    }));
    var m, b = {
            type: "error",
            data: "parser error"
        },
        k = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob),
        w = "function" == typeof ArrayBuffer,
        _ = function(e) {
            return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer
        },
        E = function(e, t, n) {
            var r = e.type,
                i = e.data;
            return k && i instanceof Blob ? t ? n(i) : A(i, n) : w && (i instanceof ArrayBuffer || _(i)) ? t ? n(i) : A(new Blob([i]), n) : n(v[r] + (i || ""))
        },
        A = function(e, t) {
            var n = new FileReader;
            return n.onload = function() {
                var e = n.result.split(",")[1];
                t("b" + (e || ""))
            }, n.readAsDataURL(e)
        };

    function O(e) {
        return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    }
    for (var T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", R = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), C = 0; C < 64; C++) R[T.charCodeAt(C)] = C;
    var B, S = "function" == typeof ArrayBuffer,
        N = function(e, t) {
            if ("string" != typeof e) return {
                type: "message",
                data: x(e, t)
            };
            var n = e.charAt(0);
            return "b" === n ? {
                type: "message",
                data: L(e.substring(1), t)
            } : g[n] ? e.length > 1 ? {
                type: g[n],
                data: e.substring(1)
            } : {
                type: g[n]
            } : b
        },
        L = function(e, t) {
            if (S) {
                var n = function(e) {
                    var t, n, r, i, o, s = .75 * e.length,
                        a = e.length,
                        c = 0;
                    "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
                    var u = new ArrayBuffer(s),
                        h = new Uint8Array(u);
                    for (t = 0; t < a; t += 4) n = R[e.charCodeAt(t)], r = R[e.charCodeAt(t + 1)], i = R[e.charCodeAt(t + 2)], o = R[e.charCodeAt(t + 3)], h[c++] = n << 2 | r >> 4, h[c++] = (15 & r) << 4 | i >> 2, h[c++] = (3 & i) << 6 | 63 & o;
                    return u
                }(e);
                return x(n, t)
            }
            return {
                base64: !0,
                data: e
            }
        },
        x = function(e, t) {
            return "blob" === t ? e instanceof Blob ? e : new Blob([e]) : e instanceof ArrayBuffer ? e : e.buffer
        },
        P = String.fromCharCode(30);

    function j() {
        return new TransformStream({
            transform: function(e, t) {
                ! function(e, t) {
                    k && e.data instanceof Blob ? e.data.arrayBuffer().then(O).then(t) : w && (e.data instanceof ArrayBuffer || _(e.data)) ? t(O(e.data)) : E(e, !1, (function(e) {
                        m || (m = new TextEncoder), t(m.encode(e))
                    }))
                }(e, (function(n) {
                    var r, i = n.length;
                    if (i < 126) r = new Uint8Array(1), new DataView(r.buffer).setUint8(0, i);
                    else if (i < 65536) {
                        r = new Uint8Array(3);
                        var o = new DataView(r.buffer);
                        o.setUint8(0, 126), o.setUint16(1, i)
                    } else {
                        r = new Uint8Array(9);
                        var s = new DataView(r.buffer);
                        s.setUint8(0, 127), s.setBigUint64(1, BigInt(i))
                    }
                    e.data && "string" != typeof e.data && (r[0] |= 128), t.enqueue(r), t.enqueue(n)
                }))
            }
        })
    }

    function q(e) {
        return e.reduce((function(e, t) {
            return e + t.length
        }), 0)
    }

    function D(e, t) {
        if (e[0].length === t) return e.shift();
        for (var n = new Uint8Array(t), r = 0, i = 0; i < t; i++) n[i] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
        return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n
    }

    function U(e) {
        if (e) return function(e) {
            for (var t in U.prototype) e[t] = U.prototype[t];
            return e
        }(e)
    }
    U.prototype.on = U.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, U.prototype.once = function(e, t) {
        function n() {
            this.off(e, n), t.apply(this, arguments)
        }
        return n.fn = t, this.on(e, n), this
    }, U.prototype.off = U.prototype.removeListener = U.prototype.removeAllListeners = U.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, r = this._callbacks["$" + e];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + e], this;
        for (var i = 0; i < r.length; i++)
            if ((n = r[i]) === t || n.fn === t) {
                r.splice(i, 1);
                break
            } return 0 === r.length && delete this._callbacks["$" + e], this
    }, U.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        if (n) {
            r = 0;
            for (var i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t)
        }
        return this
    }, U.prototype.emitReserved = U.prototype.emit, U.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, U.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    };
    var I = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();

    function F(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return n.reduce((function(t, n) {
            return e.hasOwnProperty(n) && (t[n] = e[n]), t
        }), {})
    }
    var M = I.setTimeout,
        V = I.clearTimeout;

    function H(e, t) {
        t.useNativeTimers ? (e.setTimeoutFn = M.bind(I), e.clearTimeoutFn = V.bind(I)) : (e.setTimeoutFn = I.setTimeout.bind(I), e.clearTimeoutFn = I.clearTimeout.bind(I))
    }
    var K, Y = function(e) {
            o(i, e);
            var n = l(i);

            function i(e, r, o) {
                var s;
                return t(this, i), (s = n.call(this, e)).description = r, s.context = o, s.type = "TransportError", s
            }
            return r(i)
        }(h(Error)),
        W = function(e) {
            o(i, e);
            var n = l(i);

            function i(e) {
                var r;
                return t(this, i), (r = n.call(this)).writable = !1, H(f(r), e), r.opts = e, r.query = e.query, r.socket = e.socket, r
            }
            return r(i, [{
                key: "onError",
                value: function(e, t, n) {
                    return p(s(i.prototype), "emitReserved", this).call(this, "error", new Y(e, t, n)), this
                }
            }, {
                key: "open",
                value: function() {
                    return this.readyState = "opening", this.doOpen(), this
                }
            }, {
                key: "close",
                value: function() {
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                }
            }, {
                key: "send",
                value: function(e) {
                    "open" === this.readyState && this.write(e)
                }
            }, {
                key: "onOpen",
                value: function() {
                    this.readyState = "open", this.writable = !0, p(s(i.prototype), "emitReserved", this).call(this, "open")
                }
            }, {
                key: "onData",
                value: function(e) {
                    var t = N(e, this.socket.binaryType);
                    this.onPacket(t)
                }
            }, {
                key: "onPacket",
                value: function(e) {
                    p(s(i.prototype), "emitReserved", this).call(this, "packet", e)
                }
            }, {
                key: "onClose",
                value: function(e) {
                    this.readyState = "closed", p(s(i.prototype), "emitReserved", this).call(this, "close", e)
                }
            }, {
                key: "pause",
                value: function(e) {}
            }, {
                key: "createUri",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(t)
                }
            }, {
                key: "_hostname",
                value: function() {
                    var e = this.opts.hostname;
                    return -1 === e.indexOf(":") ? e : "[" + e + "]"
                }
            }, {
                key: "_port",
                value: function() {
                    return this.opts.port && (this.opts.secure && Number(443 !== this.opts.port) || !this.opts.secure && 80 !== Number(this.opts.port)) ? ":" + this.opts.port : ""
                }
            }, {
                key: "_query",
                value: function(e) {
                    var t = function(e) {
                        var t = "";
                        for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                        return t
                    }(e);
                    return t.length ? "?" + t : ""
                }
            }]), i
        }(U),
        z = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        J = 64,
        $ = {},
        Q = 0,
        X = 0;

    function G(e) {
        var t = "";
        do {
            t = z[e % J] + t, e = Math.floor(e / J)
        } while (e > 0);
        return t
    }

    function Z() {
        var e = G(+new Date);
        return e !== K ? (Q = 0, K = e) : e + "." + G(Q++)
    }
    for (; X < J; X++) $[z[X]] = X;
    var ee = !1;
    try {
        ee = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (e) {}
    var te = ee;

    function ne(e) {
        var t = e.xdomain;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!t || te)) return new XMLHttpRequest
        } catch (e) {}
        if (!t) try {
            return new(I[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function re() {}
    var ie = null != new ne({
            xdomain: !1
        }).responseType,
        oe = function(e) {
            o(s, e);
            var n = l(s);

            function s(e) {
                var r;
                if (t(this, s), (r = n.call(this, e)).polling = !1, "undefined" != typeof location) {
                    var i = "https:" === location.protocol,
                        o = location.port;
                    o || (o = i ? "443" : "80"), r.xd = "undefined" != typeof location && e.hostname !== location.hostname || o !== e.port
                }
                var a = e && e.forceBase64;
                return r.supportsBinary = ie && !a, r.opts.withCredentials && (r.cookieJar = void 0), r
            }
            return r(s, [{
                key: "name",
                get: function() {
                    return "polling"
                }
            }, {
                key: "doOpen",
                value: function() {
                    this.poll()
                }
            }, {
                key: "pause",
                value: function(e) {
                    var t = this;
                    this.readyState = "pausing";
                    var n = function() {
                        t.readyState = "paused", e()
                    };
                    if (this.polling || !this.writable) {
                        var r = 0;
                        this.polling && (r++, this.once("pollComplete", (function() {
                            --r || n()
                        }))), this.writable || (r++, this.once("drain", (function() {
                            --r || n()
                        })))
                    } else n()
                }
            }, {
                key: "poll",
                value: function() {
                    this.polling = !0, this.doPoll(), this.emitReserved("poll")
                }
            }, {
                key: "onData",
                value: function(e) {
                    var t = this;
                    (function(e, t) {
                        for (var n = e.split(P), r = [], i = 0; i < n.length; i++) {
                            var o = N(n[i], t);
                            if (r.push(o), "error" === o.type) break
                        }
                        return r
                    })(e, this.socket.binaryType).forEach((function(e) {
                        if ("opening" === t.readyState && "open" === e.type && t.onOpen(), "close" === e.type) return t.onClose({
                            description: "transport closed by the server"
                        }), !1;
                        t.onPacket(e)
                    })), "closed" !== this.readyState && (this.polling = !1, this.emitReserved("pollComplete"), "open" === this.readyState && this.poll())
                }
            }, {
                key: "doClose",
                value: function() {
                    var e = this,
                        t = function() {
                            e.write([{
                                type: "close"
                            }])
                        };
                    "open" === this.readyState ? t() : this.once("open", t)
                }
            }, {
                key: "write",
                value: function(e) {
                    var t = this;
                    this.writable = !1,
                        function(e, t) {
                            var n = e.length,
                                r = new Array(n),
                                i = 0;
                            e.forEach((function(e, o) {
                                E(e, !1, (function(e) {
                                    r[o] = e, ++i === n && t(r.join(P))
                                }))
                            }))
                        }(e, (function(e) {
                            t.doWrite(e, (function() {
                                t.writable = !0, t.emitReserved("drain")
                            }))
                        }))
                }
            }, {
                key: "uri",
                value: function() {
                    var e = this.opts.secure ? "https" : "http",
                        t = this.query || {};
                    return !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = Z()), this.supportsBinary || t.sid || (t.b64 = 1), this.createUri(e, t)
                }
            }, {
                key: "request",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return i(e, {
                        xd: this.xd,
                        cookieJar: this.cookieJar
                    }, this.opts), new se(this.uri(), e)
                }
            }, {
                key: "doWrite",
                value: function(e, t) {
                    var n = this,
                        r = this.request({
                            method: "POST",
                            data: e
                        });
                    r.on("success", t), r.on("error", (function(e, t) {
                        n.onError("xhr post error", e, t)
                    }))
                }
            }, {
                key: "doPoll",
                value: function() {
                    var e = this,
                        t = this.request();
                    t.on("data", this.onData.bind(this)), t.on("error", (function(t, n) {
                        e.onError("xhr poll error", t, n)
                    })), this.pollXhr = t
                }
            }]), s
        }(W),
        se = function(e) {
            o(i, e);
            var n = l(i);

            function i(e, r) {
                var o;
                return t(this, i), H(f(o = n.call(this)), r), o.opts = r, o.method = r.method || "GET", o.uri = e, o.data = void 0 !== r.data ? r.data : null, o.create(), o
            }
            return r(i, [{
                key: "create",
                value: function() {
                    var e, t = this,
                        n = F(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                    n.xdomain = !!this.opts.xd;
                    var r = this.xhr = new ne(n);
                    try {
                        r.open(this.method, this.uri, !0);
                        try {
                            if (this.opts.extraHeaders)
                                for (var o in r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0), this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(o) && r.setRequestHeader(o, this.opts.extraHeaders[o])
                        } catch (e) {}
                        if ("POST" === this.method) try {
                            r.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (e) {}
                        try {
                            r.setRequestHeader("Accept", "*/*")
                        } catch (e) {}
                        null === (e = this.opts.cookieJar) || void 0 === e || e.addCookies(r), "withCredentials" in r && (r.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout), r.onreadystatechange = function() {
                            var e;
                            3 === r.readyState && (null === (e = t.opts.cookieJar) || void 0 === e || e.parseCookies(r)), 4 === r.readyState && (200 === r.status || 1223 === r.status ? t.onLoad() : t.setTimeoutFn((function() {
                                t.onError("number" == typeof r.status ? r.status : 0)
                            }), 0))
                        }, r.send(this.data)
                    } catch (e) {
                        return void this.setTimeoutFn((function() {
                            t.onError(e)
                        }), 0)
                    }
                    "undefined" != typeof document && (this.index = i.requestsCount++, i.requests[this.index] = this)
                }
            }, {
                key: "onError",
                value: function(e) {
                    this.emitReserved("error", e, this.xhr), this.cleanup(!0)
                }
            }, {
                key: "cleanup",
                value: function(e) {
                    if (void 0 !== this.xhr && null !== this.xhr) {
                        if (this.xhr.onreadystatechange = re, e) try {
                            this.xhr.abort()
                        } catch (e) {}
                        "undefined" != typeof document && delete i.requests[this.index], this.xhr = null
                    }
                }
            }, {
                key: "onLoad",
                value: function() {
                    var e = this.xhr.responseText;
                    null !== e && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup())
                }
            }, {
                key: "abort",
                value: function() {
                    this.cleanup()
                }
            }]), i
        }(U);
    if (se.requestsCount = 0, se.requests = {}, "undefined" != typeof document)
        if ("function" == typeof attachEvent) attachEvent("onunload", ae);
        else if ("function" == typeof addEventListener) {
        addEventListener("onpagehide" in I ? "pagehide" : "unload", ae, !1)
    }

    function ae() {
        for (var e in se.requests) se.requests.hasOwnProperty(e) && se.requests[e].abort()
    }
    var ce = "function" == typeof Promise && "function" == typeof Promise.resolve ? function(e) {
            return Promise.resolve().then(e)
        } : function(e, t) {
            return t(e, 0)
        },
        ue = I.WebSocket || I.MozWebSocket,
        he = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
        fe = function(e) {
            o(i, e);
            var n = l(i);

            function i(e) {
                var r;
                return t(this, i), (r = n.call(this, e)).supportsBinary = !e.forceBase64, r
            }
            return r(i, [{
                key: "name",
                get: function() {
                    return "websocket"
                }
            }, {
                key: "doOpen",
                value: function() {
                    if (this.check()) {
                        var e = this.uri(),
                            t = this.opts.protocols,
                            n = he ? {} : F(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                        this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                        try {
                            this.ws = he ? new ue(e, t, n) : t ? new ue(e, t) : new ue(e)
                        } catch (e) {
                            return this.emitReserved("error", e)
                        }
                        this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
                    }
                }
            }, {
                key: "addEventListeners",
                value: function() {
                    var e = this;
                    this.ws.onopen = function() {
                        e.opts.autoUnref && e.ws._socket.unref(), e.onOpen()
                    }, this.ws.onclose = function(t) {
                        return e.onClose({
                            description: "websocket connection closed",
                            context: t
                        })
                    }, this.ws.onmessage = function(t) {
                        return e.onData(t.data)
                    }, this.ws.onerror = function(t) {
                        return e.onError("websocket error", t)
                    }
                }
            }, {
                key: "write",
                value: function(e) {
                    var t = this;
                    this.writable = !1;
                    for (var n = function() {
                            var n = e[r],
                                i = r === e.length - 1;
                            E(n, t.supportsBinary, (function(e) {
                                try {
                                    t.ws.send(e)
                                } catch (e) {}
                                i && ce((function() {
                                    t.writable = !0, t.emitReserved("drain")
                                }), t.setTimeoutFn)
                            }))
                        }, r = 0; r < e.length; r++) n()
                }
            }, {
                key: "doClose",
                value: function() {
                    void 0 !== this.ws && (this.ws.close(), this.ws = null)
                }
            }, {
                key: "uri",
                value: function() {
                    var e = this.opts.secure ? "wss" : "ws",
                        t = this.query || {};
                    return this.opts.timestampRequests && (t[this.opts.timestampParam] = Z()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t)
                }
            }, {
                key: "check",
                value: function() {
                    return !!ue
                }
            }]), i
        }(W),
        le = function(e) {
            o(i, e);
            var n = l(i);

            function i() {
                return t(this, i), n.apply(this, arguments)
            }
            return r(i, [{
                key: "name",
                get: function() {
                    return "webtransport"
                }
            }, {
                key: "doOpen",
                value: function() {
                    var e = this;
                    "function" == typeof WebTransport && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then((function() {
                        e.onClose()
                    })).catch((function(t) {
                        e.onError("webtransport error", t)
                    })), this.transport.ready.then((function() {
                        e.transport.createBidirectionalStream().then((function(t) {
                            var n = function(e, t) {
                                    B || (B = new TextDecoder);
                                    var n = [],
                                        r = 0,
                                        i = -1,
                                        o = !1;
                                    return new TransformStream({
                                        transform: function(s, a) {
                                            for (n.push(s);;) {
                                                if (0 === r) {
                                                    if (q(n) < 1) break;
                                                    var c = D(n, 1);
                                                    o = 128 == (128 & c[0]), i = 127 & c[0], r = i < 126 ? 3 : 126 === i ? 1 : 2
                                                } else if (1 === r) {
                                                    if (q(n) < 2) break;
                                                    var u = D(n, 2);
                                                    i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0), r = 3
                                                } else if (2 === r) {
                                                    if (q(n) < 8) break;
                                                    var h = D(n, 8),
                                                        f = new DataView(h.buffer, h.byteOffset, h.length),
                                                        l = f.getUint32(0);
                                                    if (l > Math.pow(2, 21) - 1) {
                                                        a.enqueue(b);
                                                        break
                                                    }
                                                    i = l * Math.pow(2, 32) + f.getUint32(4), r = 3
                                                } else {
                                                    if (q(n) < i) break;
                                                    var p = D(n, i);
                                                    a.enqueue(N(o ? p : B.decode(p), t)), r = 0
                                                }
                                                if (0 === i || i > e) {
                                                    a.enqueue(b);
                                                    break
                                                }
                                            }
                                        }
                                    })
                                }(Number.MAX_SAFE_INTEGER, e.socket.binaryType),
                                r = t.readable.pipeThrough(n).getReader(),
                                i = j();
                            i.readable.pipeTo(t.writable), e.writer = i.writable.getWriter();
                            ! function t() {
                                r.read().then((function(n) {
                                    var r = n.done,
                                        i = n.value;
                                    r || (e.onPacket(i), t())
                                })).catch((function(e) {}))
                            }();
                            var o = {
                                type: "open"
                            };
                            e.query.sid && (o.data = '{"sid":"'.concat(e.query.sid, '"}')), e.writer.write(o).then((function() {
                                return e.onOpen()
                            }))
                        }))
                    })))
                }
            }, {
                key: "write",
                value: function(e) {
                    var t = this;
                    this.writable = !1;
                    for (var n = function() {
                            var n = e[r],
                                i = r === e.length - 1;
                            t.writer.write(n).then((function() {
                                i && ce((function() {
                                    t.writable = !0, t.emitReserved("drain")
                                }), t.setTimeoutFn)
                            }))
                        }, r = 0; r < e.length; r++) n()
                }
            }, {
                key: "doClose",
                value: function() {
                    var e;
                    null === (e = this.transport) || void 0 === e || e.close()
                }
            }]), i
        }(W),
        pe = {
            websocket: fe,
            webtransport: le,
            polling: oe
        },
        de = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        ye = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

    function ve(e) {
        var t = e,
            n = e.indexOf("["),
            r = e.indexOf("]"); - 1 != n && -1 != r && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
        for (var i, o, s = de.exec(e || ""), a = {}, c = 14; c--;) a[ye[c]] = s[c] || "";
        return -1 != n && -1 != r && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = function(e, t) {
            var n = /\/{2,9}/g,
                r = t.replace(n, "/").split("/");
            "/" != t.slice(0, 1) && 0 !== t.length || r.splice(0, 1);
            "/" == t.slice(-1) && r.splice(r.length - 1, 1);
            return r
        }(0, a.path), a.queryKey = (i = a.query, o = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(e, t, n) {
            t && (o[t] = n)
        })), o), a
    }
    var ge = function(n) {
        o(a, n);
        var s = l(a);

        function a(n) {
            var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return t(this, a), (r = s.call(this)).binaryType = "arraybuffer", r.writeBuffer = [], n && "object" === e(n) && (o = n, n = null), n ? (n = ve(n), o.hostname = n.host, o.secure = "https" === n.protocol || "wss" === n.protocol, o.port = n.port, n.query && (o.query = n.query)) : o.host && (o.hostname = ve(o.host).host), H(f(r), o), r.secure = null != o.secure ? o.secure : "undefined" != typeof location && "https:" === location.protocol, o.hostname && !o.port && (o.port = r.secure ? "443" : "80"), r.hostname = o.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), r.port = o.port || ("undefined" != typeof location && location.port ? location.port : r.secure ? "443" : "80"), r.transports = o.transports || ["polling", "websocket", "webtransport"], r.writeBuffer = [], r.prevBufferLen = 0, r.opts = i({
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: !1
            }, o), r.opts.path = r.opts.path.replace(/\/$/, "") + (r.opts.addTrailingSlash ? "/" : ""), "string" == typeof r.opts.query && (r.opts.query = function(e) {
                for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
                    var o = n[r].split("=");
                    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                }
                return t
            }(r.opts.query)), r.id = null, r.upgrades = null, r.pingInterval = null, r.pingTimeout = null, r.pingTimeoutTimer = null, "function" == typeof addEventListener && (r.opts.closeOnBeforeunload && (r.beforeunloadEventListener = function() {
                r.transport && (r.transport.removeAllListeners(), r.transport.close())
            }, addEventListener("beforeunload", r.beforeunloadEventListener, !1)), "localhost" !== r.hostname && (r.offlineEventListener = function() {
                r.onClose("transport close", {
                    description: "network connection lost"
                })
            }, addEventListener("offline", r.offlineEventListener, !1))), r.open(), r
        }
        return r(a, [{
            key: "createTransport",
            value: function(e) {
                var t = i({}, this.opts.query);
                t.EIO = 4, t.transport = e, this.id && (t.sid = this.id);
                var n = i({}, this.opts, {
                    query: t,
                    socket: this,
                    hostname: this.hostname,
                    secure: this.secure,
                    port: this.port
                }, this.opts.transportOptions[e]);
                return new pe[e](n)
            }
        }, {
            key: "open",
            value: function() {
                var e, t = this;
                if (this.opts.rememberUpgrade && a.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
                else {
                    if (0 === this.transports.length) return void this.setTimeoutFn((function() {
                        t.emitReserved("error", "No transports available")
                    }), 0);
                    e = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    e = this.createTransport(e)
                } catch (e) {
                    return this.transports.shift(), void this.open()
                }
                e.open(), this.setTransport(e)
            }
        }, {
            key: "setTransport",
            value: function(e) {
                var t = this;
                this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (function(e) {
                    return t.onClose("transport close", e)
                }))
            }
        }, {
            key: "probe",
            value: function(e) {
                var t = this,
                    n = this.createTransport(e),
                    r = !1;
                a.priorWebsocketSuccess = !1;
                var i = function() {
                    r || (n.send([{
                        type: "ping",
                        data: "probe"
                    }]), n.once("packet", (function(e) {
                        if (!r)
                            if ("pong" === e.type && "probe" === e.data) {
                                if (t.upgrading = !0, t.emitReserved("upgrading", n), !n) return;
                                a.priorWebsocketSuccess = "websocket" === n.name, t.transport.pause((function() {
                                    r || "closed" !== t.readyState && (f(), t.setTransport(n), n.send([{
                                        type: "upgrade"
                                    }]), t.emitReserved("upgrade", n), n = null, t.upgrading = !1, t.flush())
                                }))
                            } else {
                                var i = new Error("probe error");
                                i.transport = n.name, t.emitReserved("upgradeError", i)
                            }
                    })))
                };

                function o() {
                    r || (r = !0, f(), n.close(), n = null)
                }
                var s = function(e) {
                    var r = new Error("probe error: " + e);
                    r.transport = n.name, o(), t.emitReserved("upgradeError", r)
                };

                function c() {
                    s("transport closed")
                }

                function u() {
                    s("socket closed")
                }

                function h(e) {
                    n && e.name !== n.name && o()
                }
                var f = function() {
                    n.removeListener("open", i), n.removeListener("error", s), n.removeListener("close", c), t.off("close", u), t.off("upgrading", h)
                };
                n.once("open", i), n.once("error", s), n.once("close", c), this.once("close", u), this.once("upgrading", h), -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== e ? this.setTimeoutFn((function() {
                    r || n.open()
                }), 200) : n.open()
            }
        }, {
            key: "onOpen",
            value: function() {
                if (this.readyState = "open", a.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade)
                    for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
            }
        }, {
            key: "onPacket",
            value: function(e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), this.resetPingTimeout(), e.type) {
                    case "open":
                        this.onHandshake(JSON.parse(e.data));
                        break;
                    case "ping":
                        this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                        break;
                    case "error":
                        var t = new Error("server error");
                        t.code = e.data, this.onError(t);
                        break;
                    case "message":
                        this.emitReserved("data", e.data), this.emitReserved("message", e.data)
                }
            }
        }, {
            key: "onHandshake",
            value: function(e) {
                this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
            }
        }, {
            key: "resetPingTimeout",
            value: function() {
                var e = this;
                this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn((function() {
                    e.onClose("ping timeout")
                }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
            }
        }, {
            key: "onDrain",
            value: function() {
                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
            }
        }, {
            key: "flush",
            value: function() {
                if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                    var e = this.getWritablePackets();
                    this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush")
                }
            }
        }, {
            key: "getWritablePackets",
            value: function() {
                if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
                for (var e, t = 1, n = 0; n < this.writeBuffer.length; n++) {
                    var r = this.writeBuffer[n].data;
                    if (r && (t += "string" == typeof(e = r) ? function(e) {
                            for (var t = 0, n = 0, r = 0, i = e.length; r < i; r++)(t = e.charCodeAt(r)) < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
                            return n
                        }(e) : Math.ceil(1.33 * (e.byteLength || e.size))), n > 0 && t > this.maxPayload) return this.writeBuffer.slice(0, n);
                    t += 2
                }
                return this.writeBuffer
            }
        }, {
            key: "write",
            value: function(e, t, n) {
                return this.sendPacket("message", e, t, n), this
            }
        }, {
            key: "send",
            value: function(e, t, n) {
                return this.sendPacket("message", e, t, n), this
            }
        }, {
            key: "sendPacket",
            value: function(e, t, n, r) {
                if ("function" == typeof t && (r = t, t = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                    (n = n || {}).compress = !1 !== n.compress;
                    var i = {
                        type: e,
                        data: t,
                        options: n
                    };
                    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush()
                }
            }
        }, {
            key: "close",
            value: function() {
                var e = this,
                    t = function() {
                        e.onClose("forced close"), e.transport.close()
                    },
                    n = function n() {
                        e.off("upgrade", n), e.off("upgradeError", n), t()
                    },
                    r = function() {
                        e.once("upgrade", n), e.once("upgradeError", n)
                    };
                return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (function() {
                    e.upgrading ? r() : t()
                })) : this.upgrading ? r() : t()), this
            }
        }, {
            key: "onError",
            value: function(e) {
                a.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e)
            }
        }, {
            key: "onClose",
            value: function(e, t) {
                "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0)
            }
        }, {
            key: "filterUpgrades",
            value: function(e) {
                for (var t = [], n = 0, r = e.length; n < r; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
                return t
            }
        }]), a
    }(U);
    ge.protocol = 4, ge.protocol;
    var me = "function" == typeof ArrayBuffer,
        be = function(e) {
            return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
        },
        ke = Object.prototype.toString,
        we = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === ke.call(Blob),
        _e = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === ke.call(File);

    function Ee(e) {
        return me && (e instanceof ArrayBuffer || be(e)) || we && e instanceof Blob || _e && e instanceof File
    }

    function Ae(t, n) {
        if (!t || "object" !== e(t)) return !1;
        if (Array.isArray(t)) {
            for (var r = 0, i = t.length; r < i; r++)
                if (Ae(t[r])) return !0;
            return !1
        }
        if (Ee(t)) return !0;
        if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return Ae(t.toJSON(), !0);
        for (var o in t)
            if (Object.prototype.hasOwnProperty.call(t, o) && Ae(t[o])) return !0;
        return !1
    }

    function Oe(e) {
        var t = [],
            n = e.data,
            r = e;
        return r.data = Te(n, t), r.attachments = t.length, {
            packet: r,
            buffers: t
        }
    }

    function Te(t, n) {
        if (!t) return t;
        if (Ee(t)) {
            var r = {
                _placeholder: !0,
                num: n.length
            };
            return n.push(t), r
        }
        if (Array.isArray(t)) {
            for (var i = new Array(t.length), o = 0; o < t.length; o++) i[o] = Te(t[o], n);
            return i
        }
        if ("object" === e(t) && !(t instanceof Date)) {
            var s = {};
            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (s[a] = Te(t[a], n));
            return s
        }
        return t
    }

    function Re(e, t) {
        return e.data = Ce(e.data, t), delete e.attachments, e
    }

    function Ce(t, n) {
        if (!t) return t;
        if (t && !0 === t._placeholder) {
            if ("number" == typeof t.num && t.num >= 0 && t.num < n.length) return n[t.num];
            throw new Error("illegal attachments")
        }
        if (Array.isArray(t))
            for (var r = 0; r < t.length; r++) t[r] = Ce(t[r], n);
        else if ("object" === e(t))
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (t[i] = Ce(t[i], n));
        return t
    }
    var Be, Se = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
    ! function(e) {
        e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK"
    }(Be || (Be = {}));
    var Ne = function() {
        function e(n) {
            t(this, e), this.replacer = n
        }
        return r(e, [{
            key: "encode",
            value: function(e) {
                return e.type !== Be.EVENT && e.type !== Be.ACK || !Ae(e) ? [this.encodeAsString(e)] : this.encodeAsBinary({
                    type: e.type === Be.EVENT ? Be.BINARY_EVENT : Be.BINARY_ACK,
                    nsp: e.nsp,
                    data: e.data,
                    id: e.id
                })
            }
        }, {
            key: "encodeAsString",
            value: function(e) {
                var t = "" + e.type;
                return e.type !== Be.BINARY_EVENT && e.type !== Be.BINARY_ACK || (t += e.attachments + "-"), e.nsp && "/" !== e.nsp && (t += e.nsp + ","), null != e.id && (t += e.id), null != e.data && (t += JSON.stringify(e.data, this.replacer)), t
            }
        }, {
            key: "encodeAsBinary",
            value: function(e) {
                var t = Oe(e),
                    n = this.encodeAsString(t.packet),
                    r = t.buffers;
                return r.unshift(n), r
            }
        }]), e
    }();

    function Le(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    var xe = function(e) {
            o(i, e);
            var n = l(i);

            function i(e) {
                var r;
                return t(this, i), (r = n.call(this)).reviver = e, r
            }
            return r(i, [{
                key: "add",
                value: function(e) {
                    var t;
                    if ("string" == typeof e) {
                        if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                        var n = (t = this.decodeString(e)).type === Be.BINARY_EVENT;
                        n || t.type === Be.BINARY_ACK ? (t.type = n ? Be.EVENT : Be.ACK, this.reconstructor = new Pe(t), 0 === t.attachments && p(s(i.prototype), "emitReserved", this).call(this, "decoded", t)) : p(s(i.prototype), "emitReserved", this).call(this, "decoded", t)
                    } else {
                        if (!Ee(e) && !e.base64) throw new Error("Unknown type: " + e);
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        (t = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, p(s(i.prototype), "emitReserved", this).call(this, "decoded", t))
                    }
                }
            }, {
                key: "decodeString",
                value: function(e) {
                    var t = 0,
                        n = {
                            type: Number(e.charAt(0))
                        };
                    if (void 0 === Be[n.type]) throw new Error("unknown packet type " + n.type);
                    if (n.type === Be.BINARY_EVENT || n.type === Be.BINARY_ACK) {
                        for (var r = t + 1;
                            "-" !== e.charAt(++t) && t != e.length;);
                        var o = e.substring(r, t);
                        if (o != Number(o) || "-" !== e.charAt(t)) throw new Error("Illegal attachments");
                        n.attachments = Number(o)
                    }
                    if ("/" === e.charAt(t + 1)) {
                        for (var s = t + 1; ++t;) {
                            if ("," === e.charAt(t)) break;
                            if (t === e.length) break
                        }
                        n.nsp = e.substring(s, t)
                    } else n.nsp = "/";
                    var a = e.charAt(t + 1);
                    if ("" !== a && Number(a) == a) {
                        for (var c = t + 1; ++t;) {
                            var u = e.charAt(t);
                            if (null == u || Number(u) != u) {
                                --t;
                                break
                            }
                            if (t === e.length) break
                        }
                        n.id = Number(e.substring(c, t + 1))
                    }
                    if (e.charAt(++t)) {
                        var h = this.tryParse(e.substr(t));
                        if (!i.isPayloadValid(n.type, h)) throw new Error("invalid payload");
                        n.data = h
                    }
                    return n
                }
            }, {
                key: "tryParse",
                value: function(e) {
                    try {
                        return JSON.parse(e, this.reviver)
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
                }
            }], [{
                key: "isPayloadValid",
                value: function(e, t) {
                    switch (e) {
                        case Be.CONNECT:
                            return Le(t);
                        case Be.DISCONNECT:
                            return void 0 === t;
                        case Be.CONNECT_ERROR:
                            return "string" == typeof t || Le(t);
                        case Be.EVENT:
                        case Be.BINARY_EVENT:
                            return Array.isArray(t) && ("number" == typeof t[0] || "string" == typeof t[0] && -1 === Se.indexOf(t[0]));
                        case Be.ACK:
                        case Be.BINARY_ACK:
                            return Array.isArray(t)
                    }
                }
            }]), i
        }(U),
        Pe = function() {
            function e(n) {
                t(this, e), this.packet = n, this.buffers = [], this.reconPack = n
            }
            return r(e, [{
                key: "takeBinaryData",
                value: function(e) {
                    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                        var t = Re(this.reconPack, this.buffers);
                        return this.finishedReconstruction(), t
                    }
                    return null
                }
            }, {
                key: "finishedReconstruction",
                value: function() {
                    this.reconPack = null, this.buffers = []
                }
            }]), e
        }(),
        je = Object.freeze({
            __proto__: null,
            protocol: 5,
            get PacketType() {
                return Be
            },
            Encoder: Ne,
            Decoder: xe
        });

    function qe(e, t, n) {
        return e.on(t, n),
            function() {
                e.off(t, n)
            }
    }
    var De = Object.freeze({
            connect: 1,
            connect_error: 1,
            disconnect: 1,
            disconnecting: 1,
            newListener: 1,
            removeListener: 1
        }),
        Ue = function(e) {
            o(a, e);
            var n = l(a);

            function a(e, r, o) {
                var s;
                return t(this, a), (s = n.call(this)).connected = !1, s.recovered = !1, s.receiveBuffer = [], s.sendBuffer = [], s._queue = [], s._queueSeq = 0, s.ids = 0, s.acks = {}, s.flags = {}, s.io = e, s.nsp = r, o && o.auth && (s.auth = o.auth), s._opts = i({}, o), s.io._autoConnect && s.open(), s
            }
            return r(a, [{
                key: "disconnected",
                get: function() {
                    return !this.connected
                }
            }, {
                key: "subEvents",
                value: function() {
                    if (!this.subs) {
                        var e = this.io;
                        this.subs = [qe(e, "open", this.onopen.bind(this)), qe(e, "packet", this.onpacket.bind(this)), qe(e, "error", this.onerror.bind(this)), qe(e, "close", this.onclose.bind(this))]
                    }
                }
            }, {
                key: "active",
                get: function() {
                    return !!this.subs
                }
            }, {
                key: "connect",
                value: function() {
                    return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
                }
            }, {
                key: "open",
                value: function() {
                    return this.connect()
                }
            }, {
                key: "send",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.unshift("message"), this.emit.apply(this, t), this
                }
            }, {
                key: "emit",
                value: function(e) {
                    if (De.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(n), this;
                    var i = {
                        type: Be.EVENT,
                        data: n,
                        options: {}
                    };
                    if (i.options.compress = !1 !== this.flags.compress, "function" == typeof n[n.length - 1]) {
                        var o = this.ids++,
                            s = n.pop();
                        this._registerAckCallback(o, s), i.id = o
                    }
                    var a = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                    return this.flags.volatile && (!a || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this
                }
            }, {
                key: "_registerAckCallback",
                value: function(e, t) {
                    var n, r = this,
                        i = null !== (n = this.flags.timeout) && void 0 !== n ? n : this._opts.ackTimeout;
                    if (void 0 !== i) {
                        var o = this.io.setTimeoutFn((function() {
                                delete r.acks[e];
                                for (var n = 0; n < r.sendBuffer.length; n++) r.sendBuffer[n].id === e && r.sendBuffer.splice(n, 1);
                                t.call(r, new Error("operation has timed out"))
                            }), i),
                            s = function() {
                                r.io.clearTimeoutFn(o);
                                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                t.apply(r, n)
                            };
                        s.withError = !0, this.acks[e] = s
                    } else this.acks[e] = t
                }
            }, {
                key: "emitWithAck",
                value: function(e) {
                    for (var t = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    return new Promise((function(n, i) {
                        var o = function(e, t) {
                            return e ? i(e) : n(t)
                        };
                        o.withError = !0, r.push(o), t.emit.apply(t, [e].concat(r))
                    }))
                }
            }, {
                key: "_addToQueue",
                value: function(e) {
                    var t, n = this;
                    "function" == typeof e[e.length - 1] && (t = e.pop());
                    var r = {
                        id: this._queueSeq++,
                        tryCount: 0,
                        pending: !1,
                        args: e,
                        flags: i({
                            fromQueue: !0
                        }, this.flags)
                    };
                    e.push((function(e) {
                        if (r === n._queue[0]) {
                            if (null !== e) r.tryCount > n._opts.retries && (n._queue.shift(), t && t(e));
                            else if (n._queue.shift(), t) {
                                for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
                                t.apply(void 0, [null].concat(o))
                            }
                            return r.pending = !1, n._drainQueue()
                        }
                    })), this._queue.push(r), this._drainQueue()
                }
            }, {
                key: "_drainQueue",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.connected && 0 !== this._queue.length) {
                        var t = this._queue[0];
                        t.pending && !e || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args))
                    }
                }
            }, {
                key: "packet",
                value: function(e) {
                    e.nsp = this.nsp, this.io._packet(e)
                }
            }, {
                key: "onopen",
                value: function() {
                    var e = this;
                    "function" == typeof this.auth ? this.auth((function(t) {
                        e._sendConnectPacket(t)
                    })) : this._sendConnectPacket(this.auth)
                }
            }, {
                key: "_sendConnectPacket",
                value: function(e) {
                    this.packet({
                        type: Be.CONNECT,
                        data: this._pid ? i({
                            pid: this._pid,
                            offset: this._lastOffset
                        }, e) : e
                    })
                }
            }, {
                key: "onerror",
                value: function(e) {
                    this.connected || this.emitReserved("connect_error", e)
                }
            }, {
                key: "onclose",
                value: function(e, t) {
                    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t), this._clearAcks()
                }
            }, {
                key: "_clearAcks",
                value: function() {
                    var e = this;
                    Object.keys(this.acks).forEach((function(t) {
                        if (!e.sendBuffer.some((function(e) {
                                return String(e.id) === t
                            }))) {
                            var n = e.acks[t];
                            delete e.acks[t], n.withError && n.call(e, new Error("socket has been disconnected"))
                        }
                    }))
                }
            }, {
                key: "onpacket",
                value: function(e) {
                    if (e.nsp === this.nsp) switch (e.type) {
                        case Be.CONNECT:
                            e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                            break;
                        case Be.EVENT:
                        case Be.BINARY_EVENT:
                            this.onevent(e);
                            break;
                        case Be.ACK:
                        case Be.BINARY_ACK:
                            this.onack(e);
                            break;
                        case Be.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case Be.CONNECT_ERROR:
                            this.destroy();
                            var t = new Error(e.data.message);
                            t.data = e.data.data, this.emitReserved("connect_error", t)
                    }
                }
            }, {
                key: "onevent",
                value: function(e) {
                    var t = e.data || [];
                    null != e.id && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
                }
            }, {
                key: "emitEvent",
                value: function(e) {
                    if (this._anyListeners && this._anyListeners.length) {
                        var t, n = y(this._anyListeners.slice());
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                t.value.apply(this, e)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }
                    p(s(a.prototype), "emit", this).apply(this, e), this._pid && e.length && "string" == typeof e[e.length - 1] && (this._lastOffset = e[e.length - 1])
                }
            }, {
                key: "ack",
                value: function(e) {
                    var t = this,
                        n = !1;
                    return function() {
                        if (!n) {
                            n = !0;
                            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                            t.packet({
                                type: Be.ACK,
                                id: e,
                                data: i
                            })
                        }
                    }
                }
            }, {
                key: "onack",
                value: function(e) {
                    var t = this.acks[e.id];
                    "function" == typeof t && (delete this.acks[e.id], t.withError && e.data.unshift(null), t.apply(this, e.data))
                }
            }, {
                key: "onconnect",
                value: function(e, t) {
                    this.id = e, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
                }
            }, {
                key: "emitBuffered",
                value: function() {
                    var e = this;
                    this.receiveBuffer.forEach((function(t) {
                        return e.emitEvent(t)
                    })), this.receiveBuffer = [], this.sendBuffer.forEach((function(t) {
                        e.notifyOutgoingListeners(t), e.packet(t)
                    })), this.sendBuffer = []
                }
            }, {
                key: "ondisconnect",
                value: function() {
                    this.destroy(), this.onclose("io server disconnect")
                }
            }, {
                key: "destroy",
                value: function() {
                    this.subs && (this.subs.forEach((function(e) {
                        return e()
                    })), this.subs = void 0), this.io._destroy(this)
                }
            }, {
                key: "disconnect",
                value: function() {
                    return this.connected && this.packet({
                        type: Be.DISCONNECT
                    }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
                }
            }, {
                key: "close",
                value: function() {
                    return this.disconnect()
                }
            }, {
                key: "compress",
                value: function(e) {
                    return this.flags.compress = e, this
                }
            }, {
                key: "volatile",
                get: function() {
                    return this.flags.volatile = !0, this
                }
            }, {
                key: "timeout",
                value: function(e) {
                    return this.flags.timeout = e, this
                }
            }, {
                key: "onAny",
                value: function(e) {
                    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
                }
            }, {
                key: "prependAny",
                value: function(e) {
                    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
                }
            }, {
                key: "offAny",
                value: function(e) {
                    if (!this._anyListeners) return this;
                    if (e) {
                        for (var t = this._anyListeners, n = 0; n < t.length; n++)
                            if (e === t[n]) return t.splice(n, 1), this
                    } else this._anyListeners = [];
                    return this
                }
            }, {
                key: "listenersAny",
                value: function() {
                    return this._anyListeners || []
                }
            }, {
                key: "onAnyOutgoing",
                value: function(e) {
                    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
                }
            }, {
                key: "prependAnyOutgoing",
                value: function(e) {
                    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
                }
            }, {
                key: "offAnyOutgoing",
                value: function(e) {
                    if (!this._anyOutgoingListeners) return this;
                    if (e) {
                        for (var t = this._anyOutgoingListeners, n = 0; n < t.length; n++)
                            if (e === t[n]) return t.splice(n, 1), this
                    } else this._anyOutgoingListeners = [];
                    return this
                }
            }, {
                key: "listenersAnyOutgoing",
                value: function() {
                    return this._anyOutgoingListeners || []
                }
            }, {
                key: "notifyOutgoingListeners",
                value: function(e) {
                    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                        var t, n = y(this._anyOutgoingListeners.slice());
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                t.value.apply(this, e.data)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }
                }
            }]), a
        }(U);

    function Ie(e) {
        e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
    }
    Ie.prototype.duration = function() {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var t = Math.random(),
                n = Math.floor(t * this.jitter * e);
            e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
        }
        return 0 | Math.min(e, this.max)
    }, Ie.prototype.reset = function() {
        this.attempts = 0
    }, Ie.prototype.setMin = function(e) {
        this.ms = e
    }, Ie.prototype.setMax = function(e) {
        this.max = e
    }, Ie.prototype.setJitter = function(e) {
        this.jitter = e
    };
    var Fe = function(n) {
            o(s, n);
            var i = l(s);

            function s(n, r) {
                var o, a;
                t(this, s), (o = i.call(this)).nsps = {}, o.subs = [], n && "object" === e(n) && (r = n, n = void 0), (r = r || {}).path = r.path || "/socket.io", o.opts = r, H(f(o), r), o.reconnection(!1 !== r.reconnection), o.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), o.reconnectionDelay(r.reconnectionDelay || 1e3), o.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), o.randomizationFactor(null !== (a = r.randomizationFactor) && void 0 !== a ? a : .5), o.backoff = new Ie({
                    min: o.reconnectionDelay(),
                    max: o.reconnectionDelayMax(),
                    jitter: o.randomizationFactor()
                }), o.timeout(null == r.timeout ? 2e4 : r.timeout), o._readyState = "closed", o.uri = n;
                var c = r.parser || je;
                return o.encoder = new c.Encoder, o.decoder = new c.Decoder, o._autoConnect = !1 !== r.autoConnect, o._autoConnect && o.open(), o
            }
            return r(s, [{
                key: "reconnection",
                value: function(e) {
                    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
                }
            }, {
                key: "reconnectionAttempts",
                value: function(e) {
                    return void 0 === e ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
                }
            }, {
                key: "reconnectionDelay",
                value: function(e) {
                    var t;
                    return void 0 === e ? this._reconnectionDelay : (this._reconnectionDelay = e, null === (t = this.backoff) || void 0 === t || t.setMin(e), this)
                }
            }, {
                key: "randomizationFactor",
                value: function(e) {
                    var t;
                    return void 0 === e ? this._randomizationFactor : (this._randomizationFactor = e, null === (t = this.backoff) || void 0 === t || t.setJitter(e), this)
                }
            }, {
                key: "reconnectionDelayMax",
                value: function(e) {
                    var t;
                    return void 0 === e ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, null === (t = this.backoff) || void 0 === t || t.setMax(e), this)
                }
            }, {
                key: "timeout",
                value: function(e) {
                    return arguments.length ? (this._timeout = e, this) : this._timeout
                }
            }, {
                key: "maybeReconnectOnOpen",
                value: function() {
                    !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                }
            }, {
                key: "open",
                value: function(e) {
                    var t = this;
                    if (~this._readyState.indexOf("open")) return this;
                    this.engine = new ge(this.uri, this.opts);
                    var n = this.engine,
                        r = this;
                    this._readyState = "opening", this.skipReconnect = !1;
                    var i = qe(n, "open", (function() {
                            r.onopen(), e && e()
                        })),
                        o = function(n) {
                            t.cleanup(), t._readyState = "closed", t.emitReserved("error", n), e ? e(n) : t.maybeReconnectOnOpen()
                        },
                        s = qe(n, "error", o);
                    if (!1 !== this._timeout) {
                        var a = this._timeout,
                            c = this.setTimeoutFn((function() {
                                i(), o(new Error("timeout")), n.close()
                            }), a);
                        this.opts.autoUnref && c.unref(), this.subs.push((function() {
                            t.clearTimeoutFn(c)
                        }))
                    }
                    return this.subs.push(i), this.subs.push(s), this
                }
            }, {
                key: "connect",
                value: function(e) {
                    return this.open(e)
                }
            }, {
                key: "onopen",
                value: function() {
                    this.cleanup(), this._readyState = "open", this.emitReserved("open");
                    var e = this.engine;
                    this.subs.push(qe(e, "ping", this.onping.bind(this)), qe(e, "data", this.ondata.bind(this)), qe(e, "error", this.onerror.bind(this)), qe(e, "close", this.onclose.bind(this)), qe(this.decoder, "decoded", this.ondecoded.bind(this)))
                }
            }, {
                key: "onping",
                value: function() {
                    this.emitReserved("ping")
                }
            }, {
                key: "ondata",
                value: function(e) {
                    try {
                        this.decoder.add(e)
                    } catch (e) {
                        this.onclose("parse error", e)
                    }
                }
            }, {
                key: "ondecoded",
                value: function(e) {
                    var t = this;
                    ce((function() {
                        t.emitReserved("packet", e)
                    }), this.setTimeoutFn)
                }
            }, {
                key: "onerror",
                value: function(e) {
                    this.emitReserved("error", e)
                }
            }, {
                key: "socket",
                value: function(e, t) {
                    var n = this.nsps[e];
                    return n ? this._autoConnect && !n.active && n.connect() : (n = new Ue(this, e, t), this.nsps[e] = n), n
                }
            }, {
                key: "_destroy",
                value: function(e) {
                    for (var t = 0, n = Object.keys(this.nsps); t < n.length; t++) {
                        var r = n[t];
                        if (this.nsps[r].active) return
                    }
                    this._close()
                }
            }, {
                key: "_packet",
                value: function(e) {
                    for (var t = this.encoder.encode(e), n = 0; n < t.length; n++) this.engine.write(t[n], e.options)
                }
            }, {
                key: "cleanup",
                value: function() {
                    this.subs.forEach((function(e) {
                        return e()
                    })), this.subs.length = 0, this.decoder.destroy()
                }
            }, {
                key: "_close",
                value: function() {
                    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
                }
            }, {
                key: "disconnect",
                value: function() {
                    return this._close()
                }
            }, {
                key: "onclose",
                value: function(e, t) {
                    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect()
                }
            }, {
                key: "reconnect",
                value: function() {
                    var e = this;
                    if (this._reconnecting || this.skipReconnect) return this;
                    var t = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
                    else {
                        var n = this.backoff.duration();
                        this._reconnecting = !0;
                        var r = this.setTimeoutFn((function() {
                            t.skipReconnect || (e.emitReserved("reconnect_attempt", t.backoff.attempts), t.skipReconnect || t.open((function(n) {
                                n ? (t._reconnecting = !1, t.reconnect(), e.emitReserved("reconnect_error", n)) : t.onreconnect()
                            })))
                        }), n);
                        this.opts.autoUnref && r.unref(), this.subs.push((function() {
                            e.clearTimeoutFn(r)
                        }))
                    }
                }
            }, {
                key: "onreconnect",
                value: function() {
                    var e = this.backoff.attempts;
                    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
                }
            }]), s
        }(U),
        Me = {};

    function Ve(t, n) {
        "object" === e(t) && (n = t, t = void 0);
        var r, i = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = e;
                n = n || "undefined" != typeof location && location, null == e && (e = n.protocol + "//" + n.host), "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e), /^(https?|wss?):\/\//.test(e) || (e = void 0 !== n ? n.protocol + "//" + e : "https://" + e), r = ve(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
                var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
                return r.id = r.protocol + "://" + i + ":" + r.port + t, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r
            }(t, (n = n || {}).path || "/socket.io"),
            o = i.source,
            s = i.id,
            a = i.path,
            c = Me[s] && a in Me[s].nsps;
        return n.forceNew || n["force new connection"] || !1 === n.multiplex || c ? r = new Fe(o, n) : (Me[s] || (Me[s] = new Fe(o, n)), r = Me[s]), i.query && !n.query && (n.query = i.queryKey), r.socket(i.path, n)
    }
    return i(Ve, {
        Manager: Fe,
        Socket: Ue,
        io: Ve,
        connect: Ve
    }), Ve
}));
//# sourceMappingURL=socket.io.min.js.map
