import { buildLaunchBrief, type BriefRequest } from "@/lib/brief-engine";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<BriefRequest>;
    const brief = buildLaunchBrief(body);

    return Response.json(brief);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to build a launch brief right now.";

    return Response.json({ message }, { status: 400 });
  }
}
