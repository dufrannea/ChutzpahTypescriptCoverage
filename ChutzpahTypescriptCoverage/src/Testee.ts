import {Dep} from "./Dep"

export module Testee {
    export function AddTwo(x) {
        return Dep.AddOne(Dep.AddOne(x));
    }
}