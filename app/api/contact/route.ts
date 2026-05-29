type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  projectType?: string;
  timeline?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name?.trim()) {
    return Response.json(
      { message: "Please share your name so we know who the project note is from." },
      { status: 400 }
    );
  }

  if (!body.email?.trim()) {
    return Response.json(
      { message: "Please include an email address for follow-up." },
      { status: 400 }
    );
  }

  if (!body.message?.trim()) {
    return Response.json(
      { message: "A short description of the project helps us respond usefully." },
      { status: 400 }
    );
  }

  return Response.json({
    message: `Thanks, ${body.name}. Your note is in.`,
    nextStep: `If the project looks like a fit, Vizstats will reply to ${body.email} within two working days with next-step questions and availability.`,
  });
}
