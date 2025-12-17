import type { NextConfig } from 'next'
import { PHASE_TYPE } from 'next/constants'

export default function config(phase: PHASE_TYPE): NextConfig {
  return {
    reactCompiler: true,
  };
}
