export function getAdmin() {
    return prisma.admin.findUnique({where: {
        id: '7a548596-d0ac-4897-9d42-1e29dbb049a4'
    }})
  }