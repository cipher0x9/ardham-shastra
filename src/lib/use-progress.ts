"use client";

import { useCallback, useEffect, useState } from "react";
import { emptyProgress, loadProgress, saveProgress } from "./progress";
import type { ProgressState } from "./types";

export function useProgress() {
  const [state, setState] = useState<ProgressState>(emptyProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(loadProgress());
    setReady(true);
  }, []);

  const commit = useCallback((next: ProgressState) => {
    setState(next);
    saveProgress(next);
  }, []);

  return { state, commit, ready };
}
