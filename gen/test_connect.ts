// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file test.proto (package test, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { TestRequest, TestResponse } from "./test_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service test.TestService
 */
export const TestService = {
  typeName: "test.TestService",
  methods: {
    /**
     * @generated from rpc test.TestService.DoSomething
     */
    doSomething: {
      name: "DoSomething",
      I: TestRequest,
      O: TestResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

